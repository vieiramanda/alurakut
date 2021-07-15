import React from 'react'	//importa funções do React (useSate; useEffect, etccc)

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileReations } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBox } from '../src/components/ProfileRelations'


function ProfileSideBar(props) {	
	//console.log("props = ", props)
	const githubUserProfile = props
	//console.log(githubUser)
	return (
		<>
			<Box as="aside">
				<img src={`https://github.com/${props.user.name}.png`} alt="profilepic" />
				<hr />
				<a className="boxLink" href={`https://github.com/${props.user.name}`} target="_blank"> 
					@{props.user.name}
				</a>
				<p className="bioProfile">{props.user.bio}</p>
				<hr />
				<AlurakutProfileSidebarMenuDefault />
			</Box>
		</>
	)
}

export default function Home() {	
	const githubUser = {	
		name: 'vieiramanda',
		bio : 'desvendadora de códigos'
	}
	/*
	const favDevelopers = [
		'esterlilianlb',
		'peas',
		'omariosouto',
		'rafaballerini',
		'juunegreiros',
		'maateusilva',	
		'marcobrunodev'
	]
	*/
	//const comunidades = React.useState(['alurakut', 'odeio acordar cedo']) :
	//retorna o array declarado [0]  + function() [1]
	//dessa outra forma, concatena os elementos e a function fica definida como SET para alerar o State:
	//transformar em objeto
	const [comunidades, setComunidades] = React.useState([
		{
			id : '',
			title : 'Um mamão vai na cabeça...' ,
			image : 'https://www.socialdub.com/groupspictures/6538/65381350682258077780.jpg?x2'
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
		},
		{
			id : '',
			title : 'Discografias' ,
			image : 'https://img10.orkut.br.com/community/f50f08c3f0acf3519578cbc92f81089c.jpg'
		},
		{
			id : '',
			title : 'Lenin, de três' ,
			image : 'https://img10.orkut.br.com/community/f0131f9cec84100d3b7e02bd8a9323c2.jpg'
		},
		{
			id : '',
			title : 'Não fui eu, foi meu Eu lírico' ,
			image : 'https://img10.orkut.br.com/community/5e4d5320754f378e9168d5028ba98728.jpg'
		},
		{
			id : '',
			title : 'Seu Madruga, sua vó tem ORKUT?' ,
			image : 'https://img10.orkut.br.com/community/d3312c83b8a795c6129faff835ae682a.jpg'
		},
		{
			id : '',
			title : 'Eu odeio acordar cedo' ,
			image : 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
		},
			
	])

	const [favDevelopers, setFavDevelopers] = React.useState([])	
	React.useEffect(function () {
		fetch("https://api.github.com/users/vieiramanda/following")
		.then(function(response){		// o then trata um promise
			if(response.ok){				// o ok tem valor true/false. false: erros das faixas 300 e 400
				return response.json()	// retorna outra  promise
			}
			throw new Error('Ops... something went wrong: código http ' + response.status)
			
		}).then(function(responseConverted){
			console.log("response converted: ", responseConverted)
			setFavDevelopers(responseConverted)
			console.log("fav devs 2= ", favDevelopers)
		}).catch(function(error) {
			console.error(error)
		})

	}, [])

	return (
		<>
		<AlurakutMenu user={githubUser}/>
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
							//console.log("input:", dataForm.get('title'))
							//console.log("input:", dataForm.get('image'))

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
				<ProfileRelationsBox name="Desenvolvedores de respeito" devs={ favDevelopers } />
				<ProfileRelationsBox title="Comunidades" array={ comunidades } />
			</div>
		</MainGrid>
		</>
  	)
}
