import React from 'react'	//importa funções do React (useSate; useEffect, etccc)

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileReations } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(props) {	
	//console.log(props)
	return (
		<>
			<Box as="aside">
				<img src={`https://github.com/${props.user.name}.png`} alt="profilepic" />
				<hr />
				<a className="boxLink" href={`https://github.com/${props.user.name}`} target="_blank"> 
					@{props.user.name}
				</a>
				<hr />
				<AlurakutProfileSidebarMenuDefault />
			</Box>
		</>
	)
}

export default function Home() {	
	const githubUser = {	
		name: 'vieiramanda',
		age : 30
	}
	const favDevelopers = [
		'esterlilianlb',
		'peas',
		'omariosouto',
		'rafaballerini',
		'juunegreiros',
		'marcobrunodev'	
	]

	//const comunidades = React.useState(['alurakut', 'odeio acordar cedo']) :
	//retorna o array declarado [0]  + function() [1]
	//dessa outra forma, concatena os elementos e a function fica definida como SET para alerar o State:
	//transformar em objeto
	const [comunidades, setComunidades] = React.useState([{
			id : '',
			title : 'Eu odeio acordar cedo' ,
			image : 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
		},
		{
			id : '',
			title : 'O problema em ser irônico...' ,
			image : 'https://img10.orkut.br.com/community/999a403cbed48350895b9dc989bf4526.jpg'
		},
		{
			id : '',
			title : 'Sou legal, ñ to te dando mole' ,
			image : 'https://img10.orkut.br.com/community/c234097b9bb574eeeaecdbf0266a19b6.jpg'
		}		
	])
	console.log(comunidades)
	
	return (
		<>
		<AlurakutMenu />
		<MainGrid>
			<div className="profileArea" style={{ gridArea: 'profileArea' }} >
				<ProfileSideBar user={githubUser} />
			</div>
			<div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
				<Box>
					<h1 className="title">Bem-vinde!</h1>
					<OrkutNostalgicIconSet />
				</Box>
				<Box>
					<h2 className="subtitle">O que você deseja fazer?</h2>
					<form onSubmit={
						function handleCriaComunidade(e) {
							e.preventDefault()
							//console.log(e)
							const dataForm = new FormData(e.target)
							console.log("input:", dataForm.get('title'))
							console.log("input:", dataForm.get('image'))

							const comunidade = {
								id : '',
								title : dataForm.get('title'),
								image : dataForm.get('image')
							}
							//setComunidades(comunidades, comunidades.push('o problema em ser irônico'))
							setComunidades([...comunidades, comunidade]) //...spread
							//console.log(comunidades)
							document.getElementById("comunityName").value = ""
							document.getElementById("comunityImage").value = ""
						}}>

						<div>
							<input type="text" name="title" id="comunityName" aria-label="Qual vai ser o nome da sua comunidade?" placeholder="Qual vai ser o nome da sua comunidade?" />
						</div>
						<div>
							<input type="text" name="image" id="comunityImage" aria-label="Coloque uma url para colocarmos de capa" placeholder="Coloque uma url para colocarmos de capa" />
						</div>
						<button>
							Criar comunidade
						</button>
					</form>
				</Box>
			</div>
			<div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }} >
				<ProfileRelationsBoxWrapper>
					<h2 className="smallTitle">
						Desenvolvedores de respeito ({favDevelopers.length})
					</h2>
					<ul>					
						{favDevelopers.map((developer) => {
							return (
								<li key={developer}>
									<a href={`/users/${developer}`} target="_blank">
										<img src={`https://github.com/${developer}.png`} />
										<span>{developer}</span>
									</a>
								</li>
							)					
						})}
					</ul>
				</ProfileRelationsBoxWrapper>

				<ProfileRelationsBoxWrapper>
					<h2 className="smallTitle">
						Comunidades ({comunidades.length})
					</h2>
					<ul>					
						{comunidades.map((comu) => {
							return (
								<li key={comu.title}>
									<a href={`/users/${comu.title}`}>
										<img src={comu.image} />
										<span>{comu.title}</span>
									</a>
								</li>
							)					
						})}
					</ul>
				</ProfileRelationsBoxWrapper>
				
			</div>
		</MainGrid>
		</>
  	)
}
