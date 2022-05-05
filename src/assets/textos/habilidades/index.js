
/* icones */
import html from '../../imagens/icones/html.svg';
import jquery from '../../imagens/icones/jquery.svg';
import javascript from '../../imagens/icones/javascript.svg';
import css from '../../imagens/icones/css.svg';
import react from '../../imagens/icones/react.svg';
import linux from '../../imagens/icones/linux.svg';
import sass from '../../imagens/icones/sass.svg';
import nodejs from '../../imagens/icones/nodejs.svg';
import git from '../../imagens/icones/git.svg';
import github from '../../imagens/icones/github.svg';
import gitlab from '../../imagens/icones/gitlab.svg';
import xd from '../../imagens/icones/xd.svg';
import illustrator from '../../imagens/icones/illustrator.svg';
import photoshop from '../../imagens/icones/photoshop.svg';
import premiere from '../../imagens/icones/premiere.svg';
import analytics from '../../imagens/icones/analytics.svg';


export const programacao = {
	linguagens: {
		titulo: "Linguagens",
		itens:[
			{
				nome: 'React Native',
				icone: <img src={react} title="React Native" alt="Logo React Native"/>
			},
			{
				nome: 'Javascript',
				icone: <img src={javascript} title="Javascript" alt="Logo Javascript"/>
			},
			{
				nome: 'ReactJS',
				icone: <img src={react} title="ReactJs" alt="Logo ReactJs"/>
			},
			{
				nome: 'Jquery',
				icone: <img src={jquery} title="Jquery" alt="Logo Jquery"/>
			},

			{
				nome: 'NodeJS',
				icone: <img src={nodejs} title="NodeJS" alt="Logo NodeJS"/>
			}
		]
	},
	ferramentas: {
		titulo: "Ferramentas",
		itens:[
			// {
			// 	nome: 'Google Analytics',
			// 	icone: <img src={github} title="Google Analytics" alt="Logo Google Analytics"/>
			// },
			{
				nome: 'GitHub',
				icone: <img src={github} title="GitHub" alt="Logo GitHub"/>
			},
			{
				nome: 'GitLab',
				icone: <img src={gitlab} title="GitLab" alt="Logo GitLab"/>
			},
			{
				nome: 'Linux',
				icone: <img src={linux} title="Linux" alt="Logo Linux"/>
			},
			{
				nome: 'Git',
				icone: <img src={git} title="Git" alt="Logo Git"/>
			},


		]
	},
}

export const design = {
	linguagens: {
		titulo: "Design",
		itens:[
			{
				nome: 'HTML5',
				icone: <img className="html" src={html} title="HTML5" alt="Logo HTML5"/>
			},
			{
				nome: 'CSS3',
				icone: <img className="css" src={css} title="CSS3" alt="Logo CSS3"/>
			},
			{
				nome: 'SASS',
				icone: <img src={sass} title="SASS" alt="Logo SASS"/>
			}
		]
	},
	ferramentas: {
		titulo: 'Ferramentas',
		itens:[
			{
				nome: 'Adobe XD',
				icone: <img src={xd} title="XD" alt="Logo XD"/>
			},
			{
				nome: 'Photoshop',
				icone: <img src={photoshop} title="Photoshop" alt="Logo Photoshop"/>
			},
			{
				nome: 'Illustrator',
				icone: <img src={illustrator} title="Illustrator" alt="Logo Illustrator"/>
			},
			{
				nome: 'Premiere',
				icone: <img src={premiere} title="Premiere" alt="Logo Premiere"/>
			},
		]
	}
}

export const texto = `Aqui estão as linguagens e as principais ferramentas que utilizo para desenvolver
e criar conteúdos para as redes sociais.`
