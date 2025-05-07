export default function Home() {
  return (
    <div>
      <main >
        <div className="bg-base-200">
        <section className="bg-base-200 flex justify-between items-center px-8 py-4 max-w-3xl mx-auto">
        <div className="font-bold">PsWd</div>
        <div className="space-x-4 hidden md:block">
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">FAQ</a>
        </div>
        </section>
        </div>
        <div className="py-32 px-8 mx-auto text-center "> 
            <h1 className="text-4xl font-extrabold mb-6 py-10">Welcome to the Pswd</h1>
            <input type="text" placeholder="Type here" className="input input-primary size-2/4"/> 
        </div>

        <div className="mx-auto text-center">

        <button className="btn bg-slate-300">Send</button>
        </div>
            


 
      </main>

      
    </div>
  );
  
}