import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { TV } from '~/constants';
import { Api } from '~/utils/api';

export default component$(() => {
  const { params } = useLocation();
  const { api, id: sId } = params;
  const nav = useNavigate();
  const id = parseInt(sId, 10);

  // TODO: Request data from the API, if no data is returned, then redirect guard

  // Throw if an invalid API or something other than an integer is provided as the ID
  if (!(api in TV.Api) || typeof id !== 'number' || isNaN(id) || id < 0) {
    nav('/tv', { replaceState: true });
  }

  const tvResource = useResource$(async () => {
    return await Api.get()[api as keyof typeof TV.Api]().details({ id }).tv();
  });

  return (
    <div class="text-red-500">
      <Resource
        value={tvResource}
        onResolved={({ data, isSuccess }) => {
          if (!isSuccess || !data || 'success' in data) {
            // TODO: Show UI error message
            return;
          }

          return (
            <pre>{JSON.stringify(data, null, 2)}</pre>
            // <ul>
            //   {data..map(({ id, name, origin_country, overview }) => {
            //     return (
            //       <li key={id} class="pb-4">
            //         <Link href={`${id}`} class="flex flex-col">
            //           <span>{name}</span>
            //           <span>{origin_country}</span>
            //           <span>{overview}</span>
            //         </Link>
            //       </li>
            //     );
            //   })}
            // </ul>
          );
        }}
        onPending={() => <h1>Pending</h1>}
        onRejected={() => <h1>Rejected</h1>}
      />
    </div>
  );
});
