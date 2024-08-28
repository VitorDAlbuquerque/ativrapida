import '../app/globals.css' 
 
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"





function App() {

//js

function scroll( a:string){


  const b = document.getElementById(a)

  if(b){
const c = b.offsetTop
window.scrollTo({top:c,behavior:"smooth"})  
}


}


  return (
 //html
<body className='h-screen'>

<nav className='flex items-center  justify-between bg-slate-300' id="nav" >

<div className='flex items-center '>
  
<img src="https://cdn-icons-png.flaticon.com/512/7279/7279717.png"  className='h-28' alt="" />
<h1 className='font-bold text-3xl'>Mecanica</h1>

  </div>
<ul className='flex gap-7 '>
  <li onClick={()=>scroll("nav")} className='cursor-pointer'>Início</li>
  <li onClick={()=>scroll("sobrenos")} className='cursor-pointer'>Sobre nós</li>
  <li onClick={()=>scroll("servicos")} className='cursor-pointer'>Serviços</li>
</ul>


<button className='pr-36'>Contate-nos</button>

</nav>
  
  <main className=''>
 <div className="flex justify-center mt-10">
  <Carousel className="w-5/6">
    <CarouselPrevious />

      <CarouselContent className="">
  
          <CarouselItem className=' flex justify-center'>
            <img src="https://blog.engecass.com.br/wp-content/uploads/2023/05/dicas-para-manter-a-equipe-unida-na-oficina-mecanica-e-alcancar-o-sucesso.png"  alt="" />
          </CarouselItem>

          <CarouselItem className=' flex justify-center'>   

            <img src="https://mecanie.com.br/artigos/wp-content/uploads/2024/03/tecnico-em-mecanica.png" alt="" />

            
          </CarouselItem>

          <CarouselItem className=' flex justify-center'>   

            <img src="https://maintenance-minio.kdminhaoficina.com.br/blog/2023/08/criacao-de-bicicletas-na-oficina.jpg" alt="" />

            
          </CarouselItem>
   
      </CarouselContent>
      

 

      <CarouselNext />
    </Carousel>
 </div>

<div className='flex flex-col items-center mt-10'>
<h1 className='' id="sobrenos">Sobre nós</h1>
<p className='bg-red-900 w-[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae minima neque possimus a,  magni sequi nulla. Suscipit saepe aliquid dolor neque velit voluptatum iusto pariatur distinctio consequatur architecto! Itaque, corporis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, ratione repellendus ipsum nostrum, aliquam veritatis ex facere atque labore esse cupiditate obcaecati vero eius, accusantium aliquid maiores iste praesentium ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero necessitatibus voluptate culpa delectus quisquam sit laudantium aspernatur modi aliquam adipisci in fugit tempore accusantium, odio architecto porro, consequuntur maiores.</p>

</div>

<div className='flex flex-col items-center mt-10'>
<h1 className='' id="servicos">Serviços</h1>
<p className='bg-red-900 w-[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae minima neque possimus a,  magni sequi nulla. Suscipit saepe aliquid dolor neque velit voluptatum iusto pariatur distinctio consequatur architecto! Itaque, corporis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, ratione repellendus ipsum nostrum, aliquam veritatis ex facere atque labore esse cupiditate obcaecati vero eius, accusantium aliquid maiores iste praesentium ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero necessitatibus voluptate culpa delectus quisquam sit laudantium aspernatur modi aliquam adipisci in fugit tempore accusantium, odio architecto porro, consequuntur maiores.</p>

</div>



 </main>  


<footer className='flex justify-center mt-10 bg-gray-900 text-rose-300'>

<form action="" method="get"  className='flex flex-col'>
<p>Nome</p>
<input type="text" className='border-black border-2' />
<p>Email</p>
<input type="text" className='border-black border-2' />
<p>Mensagem</p>
<textarea name="mensagem" id="mensagem" className='border-black border-2'></textarea>
<button type="submit" className='border-black border-2'>Enviar</button>
</form>

</footer>


 </body>


 )

}

export default App
