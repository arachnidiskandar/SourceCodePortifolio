
export interface Projeto {
    nome: string;
    descricao: string;
    detalhes: string[];
    online?: boolean;
    github?: string;
    rota?: string;
    linkImage?: string;
}

export const MEUS_PROJETOS: Projeto[] = [
    {
        nome: 'Meu Portfólio',
        descricao: 'Esse projeto é o site que você está vendo. ' +
                   'Nele tentei aplicar a maioria das coisas que eu aprendi nos meus primeiros 6 meses.',
        detalhes: [
            'Angular',
            'Sass',
            'Animações com CSS',
            'Responsividade para mobile',
            'Manipulação do DOM com Renderer2 do Angular',
            'Interfaces com Typescript',
            'Pre-Bootstrap Loading',
            'Routas'
        ],
        github: 'https://github.com/arachnidiskandar/SourceCodePortifolio',
        linkImage: '../../assets/images/img_proj.png'
    },
    {
        nome: 'Produtores Consumidores',
        descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
        detalhes: [
            'Gerenciamento de múltiplas threads do processador',
            'Programação orientada a objetos',
            'Gerenciamento de concorrência de variáveis'
        ],
        github: 'https://www.github.com/arachnidiskandar/ProdutoresConsumidores',
        linkImage: '../../assets/images/img_python.png'
    },
    {
        nome: 'Compartilhe o seu Wi-Fi',
        descricao: 'Um projeto simples que gera um QR Code com o acesso do Wi-Fi e gera um PDF para download.',
        detalhes: [
            'Angular',
            'Conversão de HTML para PDF',
            'Responsividade Para Mobile',
            'Sass'
        ],
        online: true,
        rota: 'wifi',
        linkImage: '../../assets/images/img_wifi.png'
    }
];
