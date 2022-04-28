import * as React from "react";
const SSRPage = ({ serverData }) => (
  <main>
    <h1>SSR Page with Dogs</h1>
    <img alt="Happy dog" src={serverData.message} />
    <ol>
      {serverData?.map((val, index) => {
        return <li>{val?.title}</li>;
      })}
    </ol>
  </main>
);
export default SSRPage;
export async function getServerData() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
