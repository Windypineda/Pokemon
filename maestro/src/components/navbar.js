import { Button } from "flowbite-react";
import { Dropdown } from "flowbite-react";


export default function Navbar(){
    return(
        <div >

            <div className="justify-center max-w-full flex bg-[url('/imagenes/fondo1.jpg')]">
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

                <div className="max-w-full flex p-2 justify-center" >

                    <div className="">
                        <ul className="flex sr-only md:not-sr-only " id="navbar-default">
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
                                    <a href="/tvPokemon" className="">
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
                                    <a href="/pokeAPI" className=" top-0 right-0" aria-current="page">
                                        <img src="/imagenes/pokeAPI1.png" alt="" height="150" width="150" />
                                    </a>
                                </Button>
                                <Button className="mx-5 m-auto drop-shadow-md transition duration-300 absolute -bottom-3 opacity-0  transition duration-300 ease-in-out hover:-translate-y-3 hover:opacity-100" alt="" id="Inicio">
                                        <a href="/pokeAPI" className="" aria-current="page">
                                            <img src="/imagenes/pokeAPI2.png" className="" alt="" height="160" width="150" />
                                        </a>
                                </Button>
                            </li>
                            <li className="relative">
                                <Button className="mx-5">
                                    <a href="/login" className=" top-0 right-0" aria-current="page">
                                        <img src="/imagenes/login.png" alt="" height="150" width="150" />
                                    </a>
                                </Button>
                                <Button className="mx-5 m-auto drop-shadow-md transition duration-300 absolute -bottom-3 opacity-0  transition duration-300 ease-in-out hover:-translate-y-3 hover:opacity-100" alt="" id="Inicio">
                                        <a href="/login" className="" aria-current="page">
                                            <img src="/imagenes/login2.png" className="" alt="" height="160" width="150" />
                                        </a>
                                </Button>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            <nav class="">

                <div className="max-w-full pb-4 pl-4 flex not-sr-only md:sr-only" >
                    <div>
                        <Dropdown label="MENU" className="">
                            <Dropdown.Item>
                                <a href="/home" >
                                    <p className="text-red-950">INICIO</p> 
                                    </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href="/categorias" class="" aria-current="page">
                                    <p className="text-red-950">CATEGORIAS</p> 
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href="/tvPokemon" class="" aria-current="page">
                                    <p className="text-red-950">TV POKEMON</p>
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href="/pokeAPI" class="" aria-current="page">
                                    <p className="text-red-950">POKEAPI</p> 
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href="/login" class="" aria-current="page">
                                    <p className="text-red-950">INICIAR SESION</p> 
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        </div>
    );
}