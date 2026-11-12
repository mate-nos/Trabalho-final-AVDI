// Fonte única dos cardápios. items[0] é o destaque do storytelling.
export const MENUS = [
  { slug: 'fada', name: 'Fada', pokemon: ['Sylveon', 'Clefairy', 'Togepi'],
    colors: { main: [255,143,177], soft: [255,226,238], deep: [214,40,100], bg1: [190,230,250], bg2: [255,214,230], ink: [214,40,100] },
    tagline: 'Doçura encantada em cada gole.',
    items: [
      { name: 'Refrigerante Sylveon', desc: 'Lata de algodão-doce com laços de bolhas cintilantes e toque de morango.', price: 12.9 },
      { name: 'Cupcake Lua de Clefairy', desc: 'Massa de baunilha, glitter comestível e cobertura de nuvem rosa.', price: 14.5 },
      { name: 'Chá Ovo de Togepi', desc: 'Chá gelado de hibisco e lichia com gelo em forma de estrela.', price: 11 } ] },
  { slug: 'veneno', name: 'Veneno', pokemon: ['Koffing', 'Nidoking', 'Toxapex'],
    colors: { main: [150,36,92], soft: [214,196,220], deep: [112,16,60], bg1: [78,74,88], bg2: [128,34,74], ink: [255,255,255] },
    tagline: 'Sabores que picam de leve.',
    items: [
      { name: 'Smoothie Gás de Koffing', desc: 'Uva roxa, amora e uma fumaça de gelo seco que arrepia a língua.', price: 16.9 },
      { name: 'Burger Chifre de Nidoking', desc: 'Pão de beterraba, molho de pimenta violeta e cebola caramelizada.', price: 29.9 },
      { name: 'Picolé Espinho de Toxapex', desc: 'Açaí com limão siciliano e crocante de açúcar roxo.', price: 9.5 } ] },
  { slug: 'psiquico', name: 'Psíquico', pokemon: ['Mewtwo', 'Abra', 'Espeon'],
    colors: { main: [222,70,200], soft: [248,214,244], deep: [160,20,140], bg1: [255,208,236], bg2: [190,160,246], ink: [140,16,120] },
    tagline: 'Você já sabia que ia pedir.',
    items: [
      { name: 'Latte Mente de Abra', desc: 'Café com leite de amêndoas, calda de framboesa e espuma lilás.', price: 15 },
      { name: 'Bolo Colher de Mewtwo', desc: 'Camadas de chocolate branco, frutas vermelhas e brilho de pitaya.', price: 18.5 },
      { name: 'Limonada Sol de Espeon', desc: 'Limão, hibisco e uma pitada de gengibre para clarear os pensamentos.', price: 12 } ] },
  { slug: 'planta', name: 'Planta', pokemon: ['Bulbasaur', 'Leafeon', 'Sceptile'],
    colors: { main: [70,170,90], soft: [210,242,205], deep: [24,105,52], bg1: [208,242,205], bg2: [252,244,172], ink: [24,95,48] },
    tagline: 'Fresco como floresta depois da chuva.',
    items: [
      { name: 'Suco Semente de Bulbasaur', desc: 'Abacaxi, couve, hortelã e gengibre, prensado a frio.', price: 13.9 },
      { name: 'Salada Folhas de Leafeon', desc: 'Mix de folhas, manga, castanhas e molho cítrico de ervas.', price: 24 },
      { name: 'Wrap Cauda de Sceptile', desc: 'Pasta de grão-de-bico, legumes grelhados e pesto de manjericão.', price: 22.5 } ] },
  { slug: 'Noturno', name: 'Noturno', pokemon: ['Scrafty', 'Malamar', 'Grimmsnarl'],
    colors: { main: [124,70,196], soft: [205,190,230], deep: [66,22,108], bg1: [26,22,36], bg2: [72,30,112], ink: [255,255,255] },
    tagline: 'Para quem pede depois da meia-noite.',
    items: [
      { name: 'Biscoito Casca-Grossa do Scrafty', desc: 'Biscoito de baunilha e laranja, temático do nosso rebelde favorito.', price: 7 },
      { name: 'Brownie Enigmático do Malamar', desc: 'Brownie de chocolate amargo, calda de amora e suspiro. ', price: 11.9 },
      { name: 'Shake de Travessuras do Grimmsnarl', desc: 'Milk-shake de chocolate amargo, calda de frutas vermelhas e raspas de chocolate roxo.', price: 19.9 } ] },
]
export const themeVars = (c) => ({ '--main': c.main.join(','), '--soft': c.soft.join(','), '--deep': c.deep.join(','), '--bg1': c.bg1.join(','), '--bg2': c.bg2.join(','), '--ink': c.ink.join(',') })
export const money = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
