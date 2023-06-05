import { Button } from "flowbite-react";


export default function Navbar(){
    return(
        <div >

            <div className="justify-center max-w-full flex">
                <div className="md:mx-5 md:my-5 sr-only md:not-sr-only">
                    <img src="/imagenes/Rojo.png" alt="" height="150" width="150" className=""/>
                </div>
                <div className="md:my-6 mx-5">
                    <a href="/home">
                    <img src="/imagenes/VS7z.gif" alt="" height="600" width="600"/>
                    </a>
                </div>
                <div className="md:my-14 sr-only md:not-sr-only">
                    <img src="/imagenes/pokeball.png" alt="" height="250" width="250"/>
                </div>
                <div className="md:mx-5 md:my-7 sr-only md:not-sr-only">
                    <img src="/imagenes/hoja.png" alt="" height="130" width="130"/>
                </div>
            </div>
                
            <div className="h-4 bg-black"></div>


            <nav class="">

                <div className="max-w-full flex justify-center p-2" >

                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/500/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>

                    <ul class="flex sr-only md:not-sr-only" id="navbar-default">
                        <li className="relative">
                            <Button className="mx-5 m-auto drop-shadow-md transition duration-300 hover:opacity-25" id="Inicio">
                                    <a href="/home" class="" aria-current="page">
                                        <img src="/imagenes/inicio.png" className="" alt="" height="150" width="150" />
                                    </a>
                            </Button>
                            <Button className="mx-5 m-auto drop-shadow-md transition duration-300 absolute -bottom-3 opacity-0  transition duration-300 ease-in-out hover:-translate-y-3 hover:opacity-100" alt="" id="Inicio">
                                    <a href="/home" class="" aria-current="page">
                                        <img src="/imagenes/inicio2.png" className="" alt="" height="160" width="150" />
                                    </a>
                            </Button>
                        </li>
                        <li className="relative">
                            <Button className="mx-5 m-auto drop-shadow-md transition duration-300 hover:opacity-25">
                                <a href="/categorias" class="" aria-current="page">
                                    <img src="/imagenes/categorias.png" alt="" height="150" width="150" />
                                </a>
                            </Button>
                            <Button className="mx-5 m-auto drop-shadow-md transition duration-300 absolute -bottom-3 opacity-0  transition duration-300 ease-in-out hover:-translate-y-3 hover:opacity-100" alt="" id="Inicio">
                                    <a href="/categorias" class="" aria-current="page">
                                        <img src="/imagenes/categorias2.png" className="" alt="" height="160" width="150" />
                                    </a>
                            </Button>
                        </li>                    
                        <li className="relative">
                            <Button className="mx-5">
                                <a href="/tvPokemon" class="">
                                    <img src="/imagenes/tvpokemon.png" alt="" height="150" width="150" />
                                </a>
                            </Button>
                            <Button className="mx-5 m-auto drop-shadow-md transition duration-300 absolute -bottom-3 opacity-0  transition duration-300 ease-in-out hover:-translate-y-3 hover:opacity-100" alt="" id="Inicio">
                                    <a href="/tvPokemon" class="" aria-current="page">
                                        <img src="/imagenes/tvpokemon2.png" className="" alt="" height="160" width="150" />
                                    </a>
                            </Button>
                        </li>
                        <li className="relative">
                            <Button className="mx-5">
                                <a href="/login" class=" top-0 right-0" aria-current="page">
                                    <img src="/imagenes/login.png" alt="" height="150" width="150" />
                                </a>
                            </Button>
                            <Button className="mx-5 m-auto drop-shadow-md transition duration-300 absolute -bottom-3 opacity-0  transition duration-300 ease-in-out hover:-translate-y-3 hover:opacity-100" alt="" id="Inicio">
                                    <a href="/login" class="" aria-current="page">
                                        <img src="/imagenes/login2.png" className="" alt="" height="160" width="150" />
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