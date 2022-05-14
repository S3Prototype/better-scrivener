import { gql } from "@apollo/client";

export const GetIndexedStripeProducts = gql`
  query GetIndexedStripeProductsQuery {
    products: getIndexedProductList {
      items {
        id
        name
        description
        images
        prices {
          id
          unitAmount: unit_amount
          currency
          recurring {
            interval
            intervalCount: interval_count
          }
        }
      }
    }
  }
`;
