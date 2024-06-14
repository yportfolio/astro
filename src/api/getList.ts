export const getList = async ({ lang }: {lang: string}) => {
    const response = await fetch("https://graphql.redhat.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apollographql-client-name": "cp-labs",
        "apollographql-client-version": "2.0.0",
      },
      body: JSON.stringify({
        query: `
          query GetApps($first: Int!, $filter: ProductExperienceAppFilter!) {
              product_experience_apps(
                first: $first
                filter: $filter
                sortBy: PUBLISHDATE_DESC
              ) {
                edges {
                  node {
                    id
                    name
                    description
                    products {
                      name
                    }
                    type
                    featured
                    pubDate
                  }
                }
              }
            }
        `,
        variables: {
          first: 100,
          filter: {
            lang,
            retired: false,
          },
        },
      }),
    });
  
    const json = await response.json();
    return json;
  };
  