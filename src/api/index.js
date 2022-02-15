export default async function (url) {
  const data = fetch(url);
  return (await data).json();
}
