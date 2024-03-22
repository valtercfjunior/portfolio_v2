import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import {
	ChevronsRight,
	ExternalLink,
	FolderCheck,
	Github,
	Instagram,
	Linkedin,
	LucideMenu,
	TerminalIcon,
	Twitter,
	X,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { useEffect, useState } from "react";

function App() {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
	const [showNav, setShowNav] = useState(true);
	const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });

	useEffect(() => {
		const handleScroll = () => {
			setScrollData((prev) => {
				return {
					y: window.scrollY,
					lastY: prev.y,
				};
			});
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setSidebarIsOpen(false);

		if (scrollData.y < 500 || scrollData.y < scrollData.lastY) {
			setShowNav(true);
		} else {
			setShowNav(false);
		}
	}, [scrollData]);

	function handleShowSideBar() {
		setSidebarIsOpen(!sidebarIsOpen);
	}
	const toggle = () => setSidebarIsOpen(false);

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div>
				<header
					className={`fixed right-3 left-3   lg:h-20 h-18 pt-1 z-50  navbar ${
						showNav ? "top-0 " : "-top-20"
					}    `}
				>
					<nav className="flex justify-between ">
						<div className="min-w-16 flex-shrink-0">
							<a href="/">
								<img
									src="src/assets/V.svg"
									alt="logo"
									className="size-8 md:size-14  my-2 hover:duration-200 hover:translate-x-1 cursor-pointer"
								/>
							</a>
						</div>

						<div className="flex  gap-6    ">
							<DropdownMenu>
								<DropdownMenuTrigger className="md:hidden">
									<LucideMenu
										onClick={() => handleShowSideBar()}
									/>
								</DropdownMenuTrigger>
							</DropdownMenu>

							<ol
								className={` sidebar text-[14px] text-primary font-medium tracking-wide  ${
									sidebarIsOpen ? "open" : ""
								}`}
							>
								<li>
									<X
										onClick={() => handleShowSideBar()}
										className="size-10"
									/>
								</li>
								<li className=" flex  decoration-transparent hover:text-teal-400 ">
									<p className=" text-teal-400 fira-code">
										01.
									</p>
									<a href="/#about" onClick={toggle}>
										Sobre
									</a>
								</li>
								<li className="flex  decoration-transparent hover:text-teal-400 ">
									<p className=" text-teal-400 fira-code">
										02.
									</p>
									<a href="/#experience" onClick={toggle}>
										Exp
									</a>
								</li>
								<li className="flex   decoration-transparent hover:text-teal-400 ">
									<p className=" text-teal-400 fira-code">
										03.
									</p>
									<a href="/#jobs" onClick={toggle}>
										Jobs
									</a>
								</li>
								<li className="flex    decoration-transparent hover:text-teal-400 ">
									<p className=" text-teal-400 fira-code">
										04.
									</p>
									<a href="/#contacts" onClick={toggle}>
										Contato
									</a>
								</li>

								<a href="/resume.pdf" target="_blank">
									<Button
										className=" text-[13px] px-2  font-bold h-10 decoration-transparent border-teal-400 hover:bg-[#030712] text-teal-400 lg:hover:bg-transparent lg:hover:-translate-x-0.5 lg:hover:-translate-y-0.5 hover:text-teal-400 transition-all hover:shadow-teal-400 hover:shadow-md cursor-pointer tracking-widest"
										variant="outline"
									>
										Currículo
									</Button>
								</a>
							</ol>

							<ol className=" md:flex fira-code  hidden gap-6 mb-0 justify-end items-center text-[14px] text-primary font-medium tracking-wide">
								<li className=" flex  decoration-transparent hover:text-teal-400 ">
									<p className=" text-teal-400 fira-code">
										01.
									</p>
									<a href="/#about">Sobre</a>
								</li>
								<li className="flex  decoration-transparent hover:text-teal-400 ">
									<p className=" text-teal-400 fira-code">
										02.
									</p>
									<a href="/#experience">Exp</a>
								</li>
								<li className="flex   decoration-transparent hover:text-teal-400 ">
									<p className=" text-teal-400 fira-code">
										03.
									</p>
									<a href="/#jobs">Jobs</a>
								</li>
								<li className="flex    decoration-transparent hover:text-teal-400 ">
									<p className=" text-teal-400 fira-code">
										04.
									</p>
									<a href="/#contacts">Contato</a>
								</li>

								<a href="/resume.pdf" target="_blank">
									<Button
										className=" text-[13px] px-2  font-bold h-10 decoration-transparent border-teal-400 text-teal-400 hover:bg-transparent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-teal-400 transition-all hover:shadow-teal-400 hover:shadow-md cursor-pointer tracking-widest"
										variant="outline"
									>
										Currículo
									</Button>
								</a>
							</ol>
							<div className="my-auto">
								<ModeToggle />
							</div>
						</div>
					</nav>
				</header>
				<main className="flex flex-col md:flex-row items-stretch justify-between tracking-wide">
					<div className="min-w-20 flex-shrink-0">
						<div className="w-[20px] hidden md:flex bottom-0 fixed left-16 text-left">
							<ol className="flex flex-col gap-6  items-center">
								<li className="py-1">
									<a
										target="_blank"
										href="https://www.linkedin.com/in/valtercfjunior/"
									>
										<Linkedin className="size-6 text-primary hover:-translate-y-1 hover:text-teal-400 transition-all duration-200  " />
									</a>
								</li>
								<li className="py-1">
									<a
										target="_blank"
										href="https://github.com/valtercfjunior"
									>
										<Github className="size-6 text-primary hover:-translate-y-1 hover:text-teal-400 transition-all duration-200 " />
									</a>
								</li>
								<li className="py-1">
									<a
										target="_blank"
										href="https://www.instagram.com/valterj/"
									>
										<Instagram className="size-6 text-primary hover:-translate-y-1 hover:text-teal-400 transition-all duration-200 " />
									</a>
								</li>
								<li className="py-1">
									<a
										target="_blank"
										href="https://twitter.com/valtercfjunior"
									>
										<Twitter className="size-6 text-primary hover:-translate-y-1 hover:text-teal-400 transition-all duration-200 " />
									</a>
								</li>
								<li>
									<div className="h-40 bg-primary w-[2px] rounded-md"></div>
								</li>
							</ol>
						</div>
					</div>
					<div className="flex-grow flex items-center flex-col">
						<section className="my-[20vh] flex  flex-col text-left space-y-4 max-h-screen">
							<p className="fira-code text-teal-400 text-xl flex ">
								<TerminalIcon className=" size-7 mt-0 mr-1  text-primary animate-[pulse_1s_ease-in-out_infinite]" />
								Olá, meu nome é
							</p>
							<div className="clamp ">
								<h1 className=" font-bold  text-primary	 ">
									Valter Junior
								</h1>
								<h1 className=" font-bold text-secondary">
									Eu gosto de construir coisas
								</h1>
							</div>
							<div className="max-w-prose pb-12 ">
								<p className="fira-code text-secondary text-lg tracking-wider">
									Sou Engenheiro especializado em gestão e
									atualmente uso desse conhecimento para
									desenvolver aplicações{" "}
									<span className=" text-primary font-bold">
										{" "}
										web
									</span>{" "}
									com foco em
									<span className=" text-primary font-bold">
										{" "}
										pessoas!
									</span>
								</p>
							</div>
							<a
								className="w-min"
								href="https://www.linkedin.com/in/valtercfjunior/"
								target="_blank"
							>
								<Button
									className="text-md fira-code font-bold w-36 px-36 tracking-wider  py-7 decoration-transparent border-teal-400 text-teal-400 hover:bg-transparent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-teal-400 transition-all hover:shadow-teal-400 hover:shadow-md cursor-pointer"
									variant="outline"
								>
									Me conheça melhor!
								</Button>
							</a>
						</section>
						<section
							id="about"
							className="  lg:flex min-h-screen max-w-4xl "
						>
							<div className=" space-y-8  text-left">
								<div className="flex gap-2 pt-24 fira-code flex-wrap">
									<span className=" text-2xl text-teal-400 ">
										01.
									</span>
									<h1 className="font-bold text-3xl text-secondary tracking-wider">
										Sobre
									</h1>
									<Separator className=" ml-4 my-auto max-w-sm " />
								</div>
								<p className="text-secondary text-lg  ">
									Oi! Me chamo Valter e me divirto construindo
									coisas e trabalhando com
									<span className=" text-primary font-bold">
										{" "}
										gente
									</span>
									. Sou formado em Engenharia de Produção e
									possuo mais de 7 anos com gerenciamento de
									pessoas e projetos.
								</p>
								<p className="text-secondary text-lg  text-justify mt-4">
									Iniciei na programação por hobbie com
									Python. Depois aprendi algumas coisas sobre
									Arduino — virou até um{" "}
									<a
										href="http://www.jornacitec.fatecbt.edu.br/index.php/VIIIJTC/VIIIJTC/paper/viewFile/1850/2468"
										target="_blank"
										className="text-teal-400  relative after:bg-teal-400 after:absolute after:h-px after:w-0 after:-bottom-[1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
									>
										artigo
									</a>
									. Depois descobri que era possível criar
									minhas coisas para outras pessoas acessarem
									de suas telas. Decidi portanto pegar tudo
									que sabia sobre gestão e direcionar para o
									ramo de desenvolvimento de aplicações!
								</p>
								<p className="text-secondary text-lg  text-justify">
									Ah! Gosto de{" "}
									<span className=" text-primary font-bold">
										café, música e teclado lowprofile
									</span>
								</p>
								<p className="text-secondary text-lg text-justify">
									Aqui estão as principais tecnologias que
									venho me aprofundando:
								</p>
								<ul className="grid fira-code grid-cols-2 md:grid-cols-3  max-w-2xl ">
									<li className="flex font-normal text-secondary gap-2">
										{" "}
										<ChevronsRight className="text-teal-500" />{" "}
										TypeScript
									</li>
									<li className="flex font-normal text-secondary gap-2">
										{" "}
										<ChevronsRight className="text-teal-500" />{" "}
										Kotlin
									</li>
									<li className="flex font-normal text-secondary gap-2">
										{" "}
										<ChevronsRight className="text-teal-500" />{" "}
										React
									</li>
									<li className="flex font-normal text-secondary gap-2">
										{" "}
										<ChevronsRight className="text-teal-500" />{" "}
										Next
									</li>
									<li className="flex font-normal text-secondary gap-2">
										{" "}
										<ChevronsRight className="text-teal-500" />{" "}
										Solidity
									</li>
									<li className="flex font-normal text-secondary gap-2">
										{" "}
										<ChevronsRight className="text-teal-500" />{" "}
										Spring{" "}
									</li>
									<li className="flex font-normal text-secondary gap-2">
										{" "}
										<ChevronsRight className="text-teal-500" />
										Web3{" "}
									</li>
									<li className="flex font-normal text-secondary gap-2">
										{" "}
										<ChevronsRight className="text-teal-500" />{" "}
										Metamask{" "}
									</li>
									<li className="flex font-normal text-secondary gap-2">
										{" "}
										<ChevronsRight className="text-teal-500" />{" "}
										Tailwind{" "}
									</li>
								</ul>
							</div>
							<img
								src="src/assets/perfil_1.jpeg"
								alt="avatar"
								className="rounded-sm object-cover  w-[250px] h-[320px] mt-10 mx-auto lg:mt-32 lg:ml-10 hover:bg-transparent hover:-translate-x-1 hover:-translate-y-1 hover:text-teal-400 transition-all duration-700 ease-out hover:shadow-teal-400 hover:shadow-lg "
							/>
						</section>
						<section
							id="experience"
							className="   min-h-screen max-w-5xl     "
						>
							<div className="space-y-8 text-left max-w-6xl ">
								<div className="flex gap-2 pt-24 fira-code flex-wrap ">
									<span className=" text-2xl text-teal-400 ">
										02.
									</span>
									<h1 className="font-bold text-3xl text-secondary tracking-wider">
										Por onde passei
									</h1>
									<Separator className="ml-4 my-auto max-w-sm " />
								</div>
								<Tabs defaultValue="pilar">
									<TabsList className=" fira-code text-teal-400 md:my-8 md:py-8 md:flex md:h-20 justify-evenly bg-slate-800  w-full ">
										<TabsTrigger value="rockcel">
											Rockcel
										</TabsTrigger>
										<TabsTrigger value="eifel">
											Eifel
										</TabsTrigger>
										<TabsTrigger value="raiar">
											Raiar
										</TabsTrigger>
										<TabsTrigger value="pilar">
											Pilar i9
										</TabsTrigger>
									</TabsList>
									<TabsContent value="rockcel">
										<div className=" space-y-10  text-secondary tracking-wide leading-8 ">
											<h1 className="font-bold text-lg ">
												Líder de Produção - Rockcel
											</h1>
											<p className="fira-code text-md text-secondary ">
												Fev/2017 - Out/2019{" "}
											</p>
											<p className="text-lg text-secondary flex gap-2">
												<span>
													{" "}
													<ChevronsRight className="text-teal-500" />
												</span>
												Elaboração de ferramenta com
												Arduino, Blynk e C++; Cálculo de
												capacidade da linha de produção;
												Melhoria contínua; Auxílio no
												setor de Qualidade; Treinamento
												de novos funcionários; Gestão de
												pessoas; Planejamento de
												produção.{" "}
											</p>
										</div>
									</TabsContent>
									<TabsContent value="eifel">
										<div className=" space-y-10 text-secondary tracking-wide leading-8">
											<h1 className="font-bold text-lg ">
												Auxiliar de Processos -{" "}
												<a
													target="_blank"
													className="text-teal-400  relative after:bg-teal-400 after:absolute after:h-px after:w-0 after:-bottom-[1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
													href="https://www.eifel.com.br/"
												>
													@ Eifel Engenharia
												</a>
											</h1>
											<p className="fira-code text-md text-secondary ">
												Out/2019 - Abr/2021{" "}
											</p>
											<p className="text-lg text-secondary flex gap-2">
												<span>
													{" "}
													<ChevronsRight className="text-teal-500" />
												</span>
												Cálculo de capacidade produtiva;
												Contratações; Auxílio no setor
												de Qualidade; Elaboração de POP;
												Gestão de pessoas; Planejamento
												de produção.
											</p>
										</div>
									</TabsContent>
									<TabsContent value="raiar">
										<div className="space-y-10  text-secondary tracking-wide leading-8 ">
											<h1 className="font-bold text-lg ">
												Analista de PCP Pleno -{" "}
												<a
													href="https://raiarorganicos.com.br/"
													target="_blank"
													className="text-teal-400  relative after:bg-teal-400 after:absolute after:h-px after:w-0 after:-bottom-[1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
												>
													@ Raiar Orgânicos
												</a>
											</h1>
											<p className="fira-code text-md text-secondary ">
												Abr/2021 - Ago/2023{" "}
											</p>
											<p className="text-lg text-secondary flex gap-2">
												<span>
													{" "}
													<ChevronsRight className="text-teal-500" />
												</span>
												Suporte a gerência e setor de TI
												(Servidores, Infra e Sistemas);
												Elaboração de sistemas com Power
												Automate, Forms, SharePoint,
												Office 365, APIs e eBanco de
												Dados em nuvem; Seleção de
												Fornecedores; Elaboração de
												metas e KPis, documentos e KPIs;
												Acompanhamento de produção;
												Gerenciamento de estoques;
												Logística
											</p>
										</div>
									</TabsContent>
									<TabsContent value="pilar">
										<div className="space-y-10 text-secondary tracking-wide leading-8 ">
											<h1 className="font-bold text-lg ">
												Desenvolvedor FullStack -{" "}
												<a
													href="https://pilari9.com.br/"
													target="_blank"
													className="text-teal-400  relative after:bg-teal-400 after:absolute after:h-px after:w-0 after:-bottom-[1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
												>
													@ Pilar i9
												</a>
											</h1>
											<p className="fira-code text-md text-secondary ">
												Out/2022 - até o momento
											</p>
											<p className="text-lg text-secondary flex gap-2">
												<span>
													{" "}
													<ChevronsRight className="text-teal-500" />
												</span>
												Implementações de features e
												correções de bugs principalmente
												com React, Redux, Bootstrap,
												FontAwesome, Antd, Javascript,
												HTML, CSS, Adonis, Node.js, AWS
												EC2 e Amplify , MySQL e Docker.
											</p>
										</div>
									</TabsContent>
								</Tabs>
							</div>
						</section>
						<section id="jobs" className=" max-w-6xl  min-h-screen">
							<div className="space-y-16 ">
								<div className="flex gap-2 pt-24 fira-code justify-center flex-wrap">
									<span className=" text-2xl text-teal-400 ">
										03.
									</span>
									<h1 className="font-bold text-3xl text-secondary  tracking-wider">
										Coisas que já desenvolvi
									</h1>
									<Separator className="ml-4 my-auto max-w-sm" />
								</div>
								<div className="grid grid-cols-1  lg:grid-cols-2 relative p-7 ">
									<img
										className=" object-cover lg:h-[350px] h-full w-full  mb-12 object-left-top rounded-sm   lg:hover:opacity-100 shadow-xl duration-500 hover:shadow-slate-800 md-jobs-card lg:relative lg:opacity-70 "
										src="src/assets/job_pilar.png"
										alt="img_job_pilar"
									/>
									<div className="flex flex-col gap-6 lg:text-right lg:-translate-x-24 z-10 ">
										<div>
											<p className="text-lg text-teal-400 fira-code">
												Pilar i9
											</p>
											<h1 className="font-extrabold text-xl  text-secondary  ">
												Plataforma ERP
											</h1>
										</div>
										<span className=" text-md  lg:bg-slate-900  text-secondary p-2 rounded-sm  lg:shadow-lg lg:shadow-slate-800">
											Plataforma de gerenciamento de
											projetos e tarefas. Possui
											visualizações das tasks em lista,
											kanban e calendário. Além e
											relatórios, dashboards bot para
											envio de mensagens via whatsApp,
											email e telegram.
										</span>
										<ol className="flex lg:justify-end  gap-6 text-sm flex-wrap ">
											<li>
												<p className="fira-code text-teal-400 ">
													React
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Redux
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Adonis
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													MySQL
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Antd
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													AWS
												</p>
											</li>
										</ol>
										<a
											href="https://pilari9.com.br/"
											target="_blank"
											className="flex justify-end  text-secondary  "
										>
											<ExternalLink />
										</a>
									</div>
								</div>
								<div className="grid grid-cols-1  lg:grid-cols-2 relative p-7 ">
									<div className="flex flex-col gap-6 lg:text-left lg:translate-x-24 z-10 ">
										<div>
											<p className="text-lg text-teal-400 fira-code">
												Freelancer
											</p>
											<h1 className="font-extrabold text-xl  text-secondary  ">
												DashBoard Next
											</h1>
										</div>
										<span className=" text-md  lg:bg-slate-900 text-secondary p-2 rounded-sm  lg:shadow-lg lg:shadow-slate-800">
											Plataforma de gerenciamento de
											faturas e clientes com visualização
											de Dashboard.
										</span>
										<ol className="flex lg:justify-start  gap-6 text-sm flex-wrap  ">
											<li>
												<p className="fira-code text-teal-500">
													Next
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Typescript
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Postgre
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Tailwind
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Bcrypt
												</p>
											</li>
										</ol>
										<div className="flex gap-5 text-secondary">
											<a
												href="https://nextjs-dashboard-rouge-delta-77.vercel.app/login"
												target="_blank"
											>
												<ExternalLink />
											</a>
											<a
												href="https://github.com/valtercfjunior/nextjs-dashboard"
												target="_blank"
											>
												<Github />
											</a>
										</div>
									</div>
									<img
										className=" object-cover lg:h-[350px] h-full w-full  mb-12 object-left-top rounded-sm   lg:hover:opacity-100 shadow-xl duration-500 hover:shadow-slate-800 md-jobs-card lg:relative lg:opacity-70 "
										src="src/assets/job_freela_1.png"
										alt="img_job_freela_1"
									/>
								</div>
								<div className="grid grid-cols-1  lg:grid-cols-2 relative p-7 ">
									<img
										className=" object-cover lg:h-[350px] h-full w-full  mb-12 object-left-top rounded-sm   lg:hover:opacity-100 shadow-xl duration-500 hover:shadow-slate-800 md-jobs-card lg:relative lg:opacity-70 "
										src="src/assets/job_freela_2.png"
										alt="img_job_freela_2"
									/>
									<div className="flex flex-col gap-6 lg:text-right lg:-translate-x-24 z-10 ">
										<div>
											<p className="text-lg text-teal-400 fira-code">
												Freelancer
											</p>
											<h1 className="font-extrabold text-xl  text-secondary  ">
												Votação com BlockChain
											</h1>
										</div>
										<span className=" text-md  lg:bg-slate-900  text-secondary p-2 rounded-sm  lg:shadow-lg lg:shadow-slate-800">
											Site simulando uma votação auditável
											e transparente. Um Dapp em Next com
											bootstrap que se comunica com um
											Smart Contract em Solidity salvo em
											uma Blockchain por meio da Metamask.
										</span>
										<ol className="flex lg:justify-end  gap-6 text-sm  flex-wrap   ">
											<li>
												<p className="fira-code text-teal-500">
													Solidity
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Metamask
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Bootstrap
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Next
												</p>
											</li>
										</ol>
										<a
											href="https://github.com/valtercfjunior/dapp-webbb3"
											target="_blank"
											className="flex justify-end  text-secondary  "
										>
											<ExternalLink />
										</a>
									</div>
								</div>
								<div className="grid grid-cols-1  lg:grid-cols-2 relative p-7 ">
									<div className="flex flex-col gap-6 lg:text-left lg:translate-x-24 z-10 ">
										<div>
											<p className="text-lg text-teal-400 fira-code">
												Freelancer
											</p>
											<h1 className="font-extrabold text-xl  text-secondary  ">
												Pokedex
											</h1>
										</div>
										<span className=" text-md  lg:bg-slate-900 text-secondary p-2 rounded-sm  lg:shadow-lg lg:shadow-slate-800">
											App de listagem de Pokemons com
											recyclerView, Kotlin e Android,
											consumindo a PokeAPI.
										</span>
										<ol className="flex lg:justify-start  gap-6 text-sm  flex-wrap    ">
											<li>
												<p className="fira-code text-teal-500">
													Kotlin
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Android
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Retrofit
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Gson
												</p>
											</li>
											<li>
												<p className="fira-code text-teal-500">
													Glide
												</p>
											</li>
										</ol>
										<div className="flex gap-5 text-secondary">
											<a
												href="https://github.com/valtercfjunior/pokedex_recyclerView"
												target="_blank"
											>
												<Github />
											</a>
										</div>
									</div>
									<img
										className=" object-cover  lg:h-[350px] h-full w-full  mb-12 object-top rounded-sm   lg:hover:opacity-100 shadow-xl duration-500 hover:shadow-slate-800 md-jobs-card lg:relative lg:opacity-70 "
										src="src/assets/job_freela_3.png"
										alt="img_job_freela_3"
									/>
								</div>

								<div className="">
									<div className="flex gap-2 pt-24 fira-code justify-center flex-wrap">
										<h1 className="font-bold text-3xl text-secondary  tracking-wider">
											Outros projetos
										</h1>
										<Separator className="mx-4 my-auto max-w-sm" />
									</div>
									<div className="pt-20 ">
										<ul className="grid grid-col-span-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 ">
											<li>
												<div className=" h-full bg-slate-800 rounded-sm p-8 space-y-6 hover:-translate-y-1 transition-all duration-300 ease-in-out   repo-cards ">
													<div className="flex justify-between">
														<FolderCheck className="size-12 stroke-1 stroke-teal-500" />
														<a
															target="_blank"
															href="https://github.com/valtercfjunior/listagem-radix"
														>
															<Github className="size-7 stroke-secondary " />
														</a>
													</div>
													<div className="flex flex-col gap-6 text-left">
														<h1 className="text-2xl font-bold">
															Listagem de dados
															com Radix
														</h1>
														<p className="text-lg text-secondary">
															Uma aplicação
															simples onde o foco
															é a implementação do
															React Query e
															paginação.
														</p>
														<ol className="flex justify-between text-sm">
															<li>
																<p className="fira-code text-teal-500">
																	React
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Zod
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Radix
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Json Server
																</p>
															</li>
														</ol>
													</div>
												</div>
											</li>
											<li>
												<div className=" h-full bg-slate-800 rounded-sm p-8 space-y-6 hover:-translate-y-1 transition-all duration-300 ease-in-out repo-cards ">
													<div className="flex justify-between">
														<FolderCheck className="size-12 stroke-1 stroke-teal-500" />
														<a
															target="_blank"
															href="https://github.com/valtercfjunior/url-http_state"
														>
															<Github className="size-7 stroke-secondary " />
														</a>
													</div>
													<div className="flex flex-col gap-6 text-left">
														<h1 className="text-2xl font-bold">
															Filtros em URL e
															Cache
														</h1>
														<p className="text-lg text-secondary">
															Uma aplicação para
															treinar URL e HTTP
															State.
														</p>
														<ol className="flex justify-between text-sm">
															<li>
																<p className="fira-code text-teal-500">
																	React
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Zod
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Tanstack
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Shadcn
																</p>
															</li>
														</ol>
													</div>
												</div>
											</li>
											<li>
												<div className=" h-full   bg-slate-800 rounded-sm p-8 space-y-6 hover:-translate-y-1 transition-all duration-300 ease-in-out repo-cards ">
													<div className="flex justify-between">
														<FolderCheck className="size-12 stroke-1 stroke-teal-500" />
														<a
															target="_blank"
															href="https://github.com/valtercfjunior/book-market_kotlin-spring"
														>
															<Github className="size-7 stroke-secondary " />
														</a>
													</div>
													<div className="flex flex-col gap-6 text-left">
														<h1 className="text-2xl font-bold">
															API com Kotlin e
															Spring
														</h1>
														<p className="text-lg text-secondary">
															API com Spring
															Security com
															autorização e
															autenticação.
														</p>
														<ol className="flex justify-between text-sm">
															<li>
																<p className="fira-code text-teal-500">
																	Kotlin
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	JWT
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Spring
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Swagger
																</p>
															</li>
														</ol>
													</div>
												</div>
											</li>
											<li>
												<div className=" h-full bg-slate-800 rounded-sm p-8 space-y-6 hover:-translate-y-1 transition-all duration-300 ease-in-out repo-cards ">
													<div className="flex justify-between">
														<FolderCheck className="size-12 stroke-1 stroke-teal-500" />
														<span className="flex gap-4">
															<a
																target="_blank"
																href="https://github.com/valtercfjunior/todo_typescript"
															>
																<Github className="size-7 stroke-secondary " />
															</a>
															<a
																target="_blank"
																href="https://todo-typescript-lovat.vercel.app/"
															>
																<ExternalLink className="size-7 stroke-secondary " />
															</a>
														</span>
													</div>
													<div className="flex flex-col gap-6 text-left">
														<h1 className="text-2xl font-bold">
															Todo List
														</h1>
														<p className="text-lg text-secondary">
															Aplicação de
															cadastro e edição de
															tarefas com React e
															Redux.
														</p>
														<ol className="flex justify-between text-sm">
															<li>
																<p className="fira-code text-teal-500">
																	Bootstrap
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	React
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Typescript
																</p>
															</li>
														</ol>
													</div>
												</div>
											</li>
											<li>
												<div className=" h-full bg-slate-800 rounded-sm p-8 space-y-6 hover:-translate-y-1 transition-all duration-300 ease-in-out repo-cards ">
													<div className="flex justify-between">
														<FolderCheck className="size-12 stroke-1 stroke-teal-500" />
														<span className="flex gap-4">
															<a
																target="_blank"
																href="https://github.com/valtercfjunior/calculator-react"
															>
																<Github className="size-7 stroke-secondary " />
															</a>
															<a
																target="_blank"
																href="https://calculator-react-fawn.vercel.app/"
															>
																<ExternalLink className="size-7 stroke-secondary " />
															</a>
														</span>
													</div>
													<div className="flex flex-col gap-6 text-left">
														<h1 className="text-2xl font-bold">
															Calculadora
														</h1>
														<p className="text-lg text-secondary">
															API com Spring
															Security com
															autorização e
															autenticação.
														</p>
														<ol className="flex justify-around text-sm">
															<li>
																<p className="fira-code text-teal-500">
																	React
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Javascript
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	React Dom
																</p>
															</li>
														</ol>
													</div>
												</div>
											</li>
											<li>
												<div className=" h-full bg-slate-800 rounded-sm p-8 space-y-6 hover:-translate-y-1 transition-all duration-300 ease-in-out repo-cards ">
													<div className="flex justify-between">
														<FolderCheck className="size-12 stroke-1 stroke-teal-500" />
														<span className="flex gap-4">
															<a
																target="_blank"
																href="https://github.com/valtercfjunior/what-a-drink-responsive"
															>
																<Github className="size-7 stroke-secondary " />
															</a>
															<a
																target="_blank"
																href="https://what-a-drink-responsive.vercel.app/"
															>
																<ExternalLink className="size-7 stroke-secondary " />
															</a>
														</span>
													</div>
													<div className="flex flex-col gap-6 text-left">
														<h1 className="text-2xl font-bold">
															What a drink
														</h1>
														<p className="text-lg text-secondary">
															Página para consulta
															na API thecocktaildb
															de drinks e
															ingredientes.
														</p>
														<ol className="flex justify-between text-sm">
															<li>
																<p className="fira-code text-teal-500">
																	React
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Vite
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Tailwindcss
																</p>
															</li>
															<li>
																<p className="fira-code text-teal-500">
																	Axios
																</p>
															</li>
														</ol>
													</div>
												</div>
											</li>
										</ul>
										<a
											className="w-min"
											href="https://github.com/valtercfjunior"
											target="_blank"
										>
											<Button
												className="text-lg my-14 fira-code font-light w-36 p-24 tracking-wider  py-7 decoration-transparent border-teal-400 text-teal-400 hover:bg-transparent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-teal-400 transition-all hover:shadow-teal-400 hover:shadow-md cursor-pointer"
												variant="outline"
											>
												Mais projetos
											</Button>
										</a>
									</div>
								</div>
							</div>
						</section>
						<section
							id="contacts"
							className=" justify-center  min-h-screen flex"
						>
							<div className="space-y-12 relative">
								<div className="flex flex-col gap-4 pt-24 justify-items-center text-left">
									<span className=" text-xl text-teal-400 fira-code">
										04. Eai! Gostou do meu portfólio?
									</span>
									<h1 className="font-bold clamp text-secondary min-w-max tracking-wider">
										Fale comigo!
									</h1>
									<span className="text-secondary  max-w-lg ">
										Minha caixa de e-mail está sempre aberta
										para contato e será um prazer falar com
										você sobre jobs, dúvidas e outros
										assuntos.{" "}
									</span>
								</div>
								<Button
									onClick={() =>
										window.open(
											"mailto:valterfiumijunior@gmail.com",
											"_blank"
										)
									}
									className="text-lg  fira-code font-light w-36 px-12  tracking-wider  py-7 decoration-transparent border-teal-400 text-teal-400 hover:bg-transparent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-teal-400 transition-all hover:shadow-teal-400 hover:shadow-md cursor-pointer"
									variant="outline"
								>
									Email
								</Button>
								<footer className="fira-code text-sm  text-secondary hover:text-teal-400 duration-700 absolute bottom-24 right-0 left-0 ">
									<ol className="flex md:hidden gap-6 justify-center mb-10">
										<li className="py-1">
											<a
												target="_blank"
												href="https://www.linkedin.com/in/valtercfjunior/"
											>
												<Linkedin className="size-6 text-secondary hover:-translate-y-1 hover:text-teal-400 transition-all duration-200  " />
											</a>
										</li>
										<li className="py-1">
											<a
												target="_blank"
												href="https://github.com/valtercfjunior"
											>
												<Github className="size-6 text-secondary hover:-translate-y-1 hover:text-teal-400 transition-all duration-200 " />
											</a>
										</li>
										<li className="py-1">
											<a
												target="_blank"
												href="https://www.instagram.com/valterj/"
											>
												<Instagram className="size-6 text-secondary hover:-translate-y-1 hover:text-teal-400 transition-all duration-200 " />
											</a>
										</li>
										<li className="py-1">
											<a
												target="_blank"
												href="https://twitter.com/valtercfjunior"
											>
												<Twitter className="size-6 text-secondary hover:-translate-y-1 hover:text-teal-400 transition-all duration-200 " />
											</a>
										</li>
									</ol>

									<a href="https://github.com/valtercfjunior">
										Designed & Built by Valter Junior
									</a>
								</footer>
							</div>
						</section>
					</div>
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
