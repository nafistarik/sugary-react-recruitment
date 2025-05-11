import { baseApi } from "../api/baseApi";

const encodeFilter = (filter: any) => {
  return btoa(JSON.stringify(filter))
}

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    loginUser: build.mutation({
      query: (data) => {
        return {
          url: "/AdminAccount/Login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
        getMaterials: build.query({
      query: ({ skip = 0, limit = 20, types = [1] }) => ({
        url: "/Materials/GetAll",
        params: {
          filter: encodeFilter({ Skip: skip, Limit: limit, Types: types }),
        },
      }),

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      
      merge: (currentCache, newItems, { arg }) => {
        if (arg?.skip === 0) {
          return newItems
        }
        return {
          ...newItems,
          Materials: [...currentCache.Materials, ...newItems.Materials],
        }
      },
      
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
  }),
});

export const { useLoginUserMutation, useGetMaterialsQuery } = authApi;
