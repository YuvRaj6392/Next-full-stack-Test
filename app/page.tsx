import axios from "axios";

async function getUserDetails() {
  // await new Promise((r)=>setTimeout(r,5000))
  const response = await axios.get("http://localhost:3000/api/user")
  console.log(response)
	return response.data;
}


//async function works only for the server component
export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div>
      {userData.user?.username}
      <br />
      {userData.user?.password}
    </div>
  );
}
