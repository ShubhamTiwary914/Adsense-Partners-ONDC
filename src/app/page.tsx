import { redirect } from "next/navigation";


export default function Home() {
  redirect('/auth/register');
  
  return (
    <div>
      
    </div>
  );
}
