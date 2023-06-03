

export default function Navbar(){
    return(
        <div>
            <div className="p-5 mx-10 max-w-full flex">
                <div className="w-3/4">
                    <a href="/home">
                    <img src="/imagenes/VS7z.gif" alt="" height="500" width="500" a />
                    </a>
                </div>
                {/* <div className="w-1/4">
                    <a href="/login" class=" top-0 right-0" aria-current="page">
                        <img src="/imagenes/login.png" alt="" height="200" width="200" />
                    </a>
                </div> */}
                </div>
                


            <nav class="">

                <div className="max-w-full flex justify-center p-2" >

                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/500/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>

                    <div class="flex" id="navbar-default">
                        <div className="mx-5 relative w-150px" id="Inicio">
                            <a href="/home" class=" " aria-current="page">
                                <img src="/imagenes/inicio.png" id="Imagen-Inicio" alt="" height="150" width="150" />
                            </a>
                        </div>
                        <div className="mx-5">
                            <a href="/categorias" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                                <img src="/imagenes/categorias.png" alt="" height="150" width="150" />
                            </a>
                        </div>
                        <div className="mx-5">
                            <a href="/tvPokemon" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                                <img src="/imagenes/tvpokemon.png" alt="" height="150" width="150" />
                            </a>
                        </div>

                        <div className="mx-5">
                            <a href="/carrito" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                                <img src="/imagenes/carrito.png" alt="" height="150" width="150" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}