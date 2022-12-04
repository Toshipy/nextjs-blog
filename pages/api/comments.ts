import { GraphQLClient, gql } from 'graphql-request';

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphqlAPI = 'https://api-ap-northeast-1.hygraph.com/v2/clb7wn5ht0vtm01ta3i546ybl/master';
const TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzAxNDY2NjgsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5oeWdyYXBoLmNvbS92Mi9jbGI3d241aHQwdnRtMDF0YTNpNTQ2eWJsL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI5MjY2MzY2Ny00MTllLTQ1ZWItYjllYy1lMTFhODdhMmExOTAiLCJqdGkiOiJjbGI5Njdjb2MxcHZ5MDF1dGdybWsydTNoIn0.JoGJdeOqfSsnMM2FOajE7_iXHMaYDKCRpq9q7Si-gh7K0RXhpU_65hN_xCtJ6GX4cxQ9gTMnFt1xf8WssTj3RZNvJkpjLj_YWxHth6DSD5u40cenejo4F1wilbVcLpnpkKSXw0aramXhvCbhbV9UaF_F35HDW3PmU4cuJCzvIdjQegGGIWM3k604MnfN87KtQ6N18JduXONaZXxri_x2078Hz7CBIgGqKQaOPxMptHzpebjpbyx6Sf2o5Ccjdh9YQHAlQ1hug_qRp60R00Q4Q7UA3UbzUQ3v89mLjHepnXoX4xTOC01Be0bTt4kt5-MK38X_VS0IyXThmr8a4ke9VoFpPgUyV54Jkz_ynwKS9ojOkMF6q9Y1qw-w8UbNP3sQtJGa5igSOLseLKjwHrXWTLGtT0MyJFrJuxoKiPoUriC8STfOtSi1YqrGLQrDqirTv3wM1zYQwKzi8sATPtqqEZV3-XNM6njD1OZNHXlOzPnslfWAqmcNWDptkA_sbqMLyYzWi59qLkuFNLN3Vufh5-2VEJmQPgWaylhaG6Oj8dsQZppm0WjHfB6g1YQgTCnTfldwGfK4CIxOVvUy2n2ENrFGC2z80L3zhYECaZ1qFwf0EFvj478zpbraDcteBqDS5uOghhIlCMsnG1PBYt-QvZW7vh1pzLbC5VC769g9N90';

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      // authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      authorization: `Bearer ${TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}
