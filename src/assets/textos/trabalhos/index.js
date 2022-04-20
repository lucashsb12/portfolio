/* IMPORTS SITES */
import logoDr from '../../imagens/logo-branco.webp';
import logoFortex from '../../imagens/logo-fortex.png';
import logoCerimonial from '../../imagens/logo-cerimonial.webp';
import logoLavafort from '../../imagens/logo_header.png';

/* IMPORTS ARTES */
import arte1 from '../../imagens/Comente-o-seu-melhor-conselho.jpg';
import arte2 from '../../imagens/Dia_incrivel.jpg';
import arte3 from '../../imagens/Feed-5_dicas_clientes-01.jpg';
import arte4 from '../../imagens/OqueNaoFazerNoMarketing.jpg';

/* IMPORTES SISTEMAS */
import img_ad1 from '../../imagens/img_ad1.png';
import img_ad2 from '../../imagens/img_ad2.png';
import img_ad3 from '../../imagens/img_ad3.png';
import img_ad4 from '../../imagens/img_ad4.png';
import img_ad5 from '../../imagens/img_ad5.png';
import img_vacina_sp1 from '../../imagens/img_vacina_sp1.png';
import img_vacina_sp2 from '../../imagens/img_vacina_sp2.png';
import img_vacina_sp3 from '../../imagens/img_vacina_sp3.png';
import img_vacina_sp4 from '../../imagens/img_vacina_sp4.png';
import img_vacina_sp5 from '../../imagens/img_vacina_sp5.png';
import img_roh1 from '../../imagens/img_roh1.png';
import img_roh2 from '../../imagens/img_roh2.png';
import img_roh3 from '../../imagens/img_roh3.png';
import img_roh4 from '../../imagens/img_roh4.png';
import img_donca1 from '../../imagens/img_donca1.png';
import img_donca2 from '../../imagens/img_donca2.png';
import img_donca3 from '../../imagens/img_donca3.png';
import img_donca4 from '../../imagens/img_donca4.png';
import img_sis_dtic1 from '../../imagens/img_sis_dtic1.png';
import img_sis_dtic2 from '../../imagens/img_sis_dtic2.png';
import img_sis_dtic3 from '../../imagens/img_sis_dtic3.png';
import img_sis_dtic4 from '../../imagens/img_sis_dtic4.png';


export const sites = {
	explicacao: <span>Aqui estão alguns dos sites que desenvolvi tendo a atuação de web designer. Todos
		os sites foram construídos conforme às regras do W3C quanto ao CSS e HTML. Além de serem desenvolvidos
		semânticamente e estruturalmente amigáveis para o CEO. Todos os sites foram desenvolvidos em serviço á empresa
		<a className="link__destaque" href="https://www.yaslip.com.br/" target="_blank" rel="noreferrer"> Yaslip</a>,
		a qual fui web designer em 12/2019 até 03/2021.</span>,

	conteudo: [
		// {
		// 	titulo: 'drLeandro',
		// 	img: logoDr,
		// 	url: 'https://drleandromendoncacirurgiao.com.br/',
		// 	info: `Dr. Leandro, especializado em cirurgia abdominal.
		// 			Seu site foi pensado para explicar seus procedimentos e um pouco
		// 			sobre sua história de vida.`
		// },
		{
			titulo: 'Fortex Locação',
			img: logoFortex,
			url: 'https://www.fortexlocacao.com.br/',
			info: `A Fortex Locação é uma empresa que disponibiliza alugueis de equipamentos de construção.
					Seu site foi feito pensando em explicar o funcionamento de todos os seus equipamentos
					e como a empresa trabalha.`
		},
		{
			titulo: 'Lavafort',
			img: logoLavafort,
			url: 'https://lavafort.com.br/',
			info: `A Lavafort é uma empresa especializada em higienização de estofados.
					Seu site foi pensado para demonstrar um pouco de seus procedimentos e facilitar
					a contratação de seus serviços a domicílio.`

		},
		{
			titulo: 'Cerimonial Pacaembu',
			img: logoCerimonial,
			url: 'https://cerimonialpacaembu.com.br/',
			info: `A Cerimonial, é especializada em serviços funerários, desde os procedimentos médicos
					ao transporte e cremamento. Seu site foi desenvolvido para explicar mais sobre a sua
					área de atuação e facilitar a contratação de seus serviços.`
		},
	]
}

export const artes = {
	explicacao: <span>Em minha experiência profissional, há uma parte reservada para o trabalho
		freelancer. Fiz diversos trabalhos de criação de conteúdos para redes sociais. Criei desde
		artes para publicações, edições de vídeos, até criação de conteúdo em forma de textos.
		Todas as artes foram avaliadas e aprovadas pela <a className="link__destaque"
		href="https://www.instagram.com/ajulianavas/" target="_blank" rel="noreferrer">Juliana Vas</a> para o seu
		cliente <a className="link__destaque" href="https://www.instagram.com/ajulianavas/" target="_blank"
		rel="noreferrer">Feras no Marketing</a>.
	</span>,
	conteudo: [
		{
			img: arte1,
			url: 'https://www.instagram.com/p/COVMu-dtk4M/?utm_source=ig_web_copy_link',
		},
		{
			img: arte2,
			url: 'https://www.instagram.com/p/CKeIjNuM9fa/?utm_source=ig_web_copy_link',
		},
		{
			img: arte3,
			url: 'https://www.instagram.com/p/CJ_V_Q9guS7/?utm_source=ig_web_copy_link',
		},
		{
			img: arte4,
			url: 'https://www.instagram.com/p/CLCSoBTHf-V/?utm_source=ig_web_copy_link',
		},
	]
}

export const sistemas = {
	explicacao: <span>Como foco principal, aqui está um pouco trabalho que desenvolvi como programador front-end. Destaco
		o sistema <i>De Olho na Fila</i> que foi premiado e recebu bastante destaque ao bater mais de 40 milhões de acessos
		desde o seu lançamento. Ajudando inctáveis pessoas a ficarem informadas sobre as a demanda de pessoas para receberem
		a vacina para o COVID 19 em cada unidade de saúde no município de São Paulo.
		Todos os sitemas abaixo foram desenvolvidos em serviço à prefeitura municipal de saúde de São Paulo.
	</span>,
	conteudo: [
		{
			sistema: 'Atendimento Domiciliar',
			desc: `Sistema desenvolvido para auxiliar os profissionais de saúde no controle
					de pacientes cadastrados no sistema. O sistema conta com um módulo dedicado ao
					COVID 19.`,
			tecs: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
			imgs: [
				img_ad1, img_ad2, img_ad3, img_ad4, img_ad5
			]
		},
		{
			sistema: 'Vacina Sampa',
			desc: `Sistema desenvolvido para auxiliar os profissionais de saúde no controle
					de estoque e vacinas aplicadas COVID 19 em cada unidade de saúde.`,
			tecs: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
			imgs: [
				img_vacina_sp1, img_vacina_sp2, img_vacina_sp3, img_vacina_sp4, img_vacina_sp5
			]
		},
		{
			sistema: 'Relatório de Ocupação Hospitalar',
			desc: `Sistema desenvolvido para auxiliar os profissionais de saúde no controle de leitos ocupados
					nos hospitais do município de São Paulo.`,
			tecs: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
			imgs: [
				img_roh1, img_roh2, img_roh3, img_roh4
			]
		},
		{
			sistema: 'De Olho Na Carteirinha',
			desc: `Sistema desenvolvido para auxiliar os profissionais de saúde no controle
					das carteiras de vacinação de crianças e adolescentes no município de São Paulo.`,
			tecs: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
			imgs:[
				img_donca1, img_donca2, img_donca3, img_donca4
			]
		},
		{
			sistema: 'SISDTIC',
			desc: `Sistema desenvolvido para auxiliar os profissionais internos do departamento
			onde trabalho atualmente. Ele ajuda a gerenciar contratos, métricas e automatizar trabalhos
			que eram feitos manualmente.`,
			tecs: ['HTML5', 'CSS3', 'ReactJs'],
			imgs:[
				img_sis_dtic1, img_sis_dtic2, img_sis_dtic3, img_sis_dtic4
			]
		}
	]
}