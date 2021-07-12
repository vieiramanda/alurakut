import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileReations } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(props) {
	//const githubUser = 'vieiramanda'
	console.log(props)
	return (
		<Box>
			<img src={`https://github.com/${props.user.name}.png`} alt="profilepic" />
		</Box>
	)
}

export default function Home() {
	const githubUser = {	
		name: 'vieiramanda',
		age : 30
	}	

	const favDevelopers = [
		'peas',
		'omariosouto',
		'rafaballerini',
		'juunegreiros',
		'marcobrunodev',
		'felipefialho'
	]

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
			</div>
			<div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }} >
				<ProfileRelationsBoxWrapper>
					<h2 className="smallTitle">
						Desenvovedores de respeito ({favDevelopers.length})
					</h2>
					<ul>					
						{favDevelopers.map((developer) => {
							return (
								<li>
									<a href={`/users/${developer}`} key={developer}>
										<img src={`https://github.com/${developer}.png`} />
										<span>{developer}</span>
									</a>
								</li>
							)
					
						})}
					</ul>
				</ProfileRelationsBoxWrapper>
				<Box>
					Comunidades
				</Box>
			</div>
		</MainGrid>
		</>
  	)
}
