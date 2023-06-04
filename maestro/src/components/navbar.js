import { Button } from "flowbite-react";


export default function Navbar(){
    return(
        <div >

            <div className="justify-center max-w-full flex">
                <div>
                    <img src="/imagenes/Rojo.png" alt="" height="150" width="150" className="mx-5 my-5"/>
                </div>
                <div className="my-6">
                    <a href="/home">
                    <img src="/imagenes/VS7z.gif" alt="" height="600" width="600" a />
                    </a>
                </div>
                <div className="my-16">
                    <img src="/imagenes/pokeball.png" alt="" height="250" width="250" a />
                </div>
                <div>
                    <img src="/imagenes/hoja.png" alt="" height="130" width="130" className="mx-5 my-7"/>
                </div>
            </div>
                
            <div className="h-4 bg-black"></div>


            <nav class="">

                <div className="max-w-full flex justify-center p-2" >

                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/500/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>

                    <ul class="flex" id="navbar-default">
                        <li>
                            <Button className="mx-5 relative w-150px drop-shadow-md" id="Inicio">
                                    <a href="/home" class=" " aria-current="page">
                                        <img src="/imagenes/inicio.png" id="Imagen-Inicio" alt="" height="150" width="150" />
                                    </a>
                            </Button>
                        </li>
                        <li>
                            <Button className="mx-5">
                                <a href="/categorias" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                                    <img src="/imagenes/categorias.png" alt="" height="150" width="150" />
                                </a>
                            </Button>
                        </li>                    
                        <li>
                            <Button className="mx-5">
                                <a href="/tvPokemon" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                                    <img src="/imagenes/tvpokemon.png" alt="" height="150" width="150" />
                                </a>
                            </Button>
                        </li>
                        <li>
                            <Button className="mx-5">
                                <a href="/login" class=" top-0 right-0" aria-current="page">
                                    <img src="/imagenes/login.png" alt="" height="150" width="150" />
                                </a>
                            </Button>
                        </li>
                        <li>
                            {/* <Button className="mx-5">
                                <a href="/carrito" class="">
                                    <img src="/imagenes/carrito.gif" alt="" height="150" width="150" className="rounded-full"/>
                                </a>
                            </Button> */}
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}