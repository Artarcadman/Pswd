export default function Home() {
  return (
    <div>
      <main >

        <div className="py-32 px-8 mx-auto text-center"> 
            <h1 className="text-4xl font-extrabold mb-6 py-10">Welcome to the Pswd</h1>
            <input type="text" placeholder="Type here" className="input input-primary size-2/5"/> 
        </div>

        <div className="mx-auto text-center">

        <button className="btn btn-primary">Send</button>
        </div>
            


 
      </main>

      
    </div>
  );
  
}