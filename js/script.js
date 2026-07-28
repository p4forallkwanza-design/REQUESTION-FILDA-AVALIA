/* ==========================================================================
   FILDA 2026 - Ultra-Premium Script Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Carrega o player Vturb sob demanda (apenas quando a página de vídeo é exibida)
  let vturbLoaded = false;
  function loadVturbPlayer() {
    if (vturbLoaded) return;
    vturbLoaded = true;
    [
      '6a6914bcd15209c1720aafbb',
    ].forEach((playerId) => {
      const s = document.createElement('script');
      s.src = `https://scripts.converteai.net/a01e16fb-487d-4f57-ab18-262b800e8d76/players/${playerId}/v4/player.js`;
      s.async = true;
      document.head.appendChild(s);
    });
  }


  // 10 Evaluation Items Dataset com Links Diretos das Imagens
  const evaluations = [
    {
      category: "📺 Mídia & Informação",
      question: "Qual é o melhor programa informativo do país?",
      optionA: {
        label: "Fala Angola",
        tag: "INFORMATIVO",
        img: "https://i.postimg.cc/CdwjcChB/Fala-Angola.webp"
      },
      optionB: {
        label: "Telejornal",
        tag: "NOTICIÁRIO",
        img: "https://i.postimg.cc/mhTQm3LF/telejorna.jpg"
      },
      percentA: 78,
      percentB: 22,
      reward: 5000,
      rating: "4.9",
      ratingCount: "10,8 milhões de avaliações",
      reviews: [
        { name: "Linece S.", color: "#059669", text: "Excelente iniciativa da FILDA! Já consegui acumular 15.000 Kz no meu primeiro dia e fiz o saque para a minha conta Express. As perguntas são muito fáceis e intuitivas." },
        { name: "Joseph IDOHOU", color: "#4F46E5", text: "Muito top! Plataforma rápida e segura. É ótimo poder dar a nossa opinião sincera sobre os melhores programas angolanos e ainda receber em Kwanzas na hora." },
        { name: "Kátia Mendes", color: "#D97706", text: "Adoro o Fala Angola, é o melhor programa informativo sem dúvida! E esta plataforma da FILDA é muito bem organizada. Já saquei 15.000 Kz, funcionou na hora." },
        { name: "Domingos Lopes", color: "#7C3AED", text: "Votei no Telejornal porque é mais sério. De qualquer forma, a experiência aqui foi excelente. Saldo creditado automaticamente após cada resposta. Recomendo!" },
        { name: "Neuza Carvalho", color: "#DC2626", text: "Nunca pensei que dar opinião sobre TV me rendesse dinheiro. Cumpriram tudo o que prometeram. Já estou a contar para os meus amigos participarem também." }
      ]
    },
    {
      category: "💳 Carteira Digital",
      question: "Qual é o serviço financeiro digital mais eficiente?",
      optionA: {
        label: "Multicaixa Express",
        tag: "EXPRESS",
        img: "https://i.postimg.cc/BtJxm5SP/MULTICAIXA-EXPRESS.png"
      },
      optionB: {
        label: "BAI Directo",
        tag: "BAI APP",
        img: "https://i.postimg.cc/Lhmzxk9q/bai-direito.jpg"
      },
      percentA: 82,
      percentB: 18,
      reward: 5000,
      rating: "4.8",
      ratingCount: "8,5 milhões de avaliações",
      reviews: [
        { name: "Carlos M.", color: "#059669", text: "Uso o Multicaixa Express para tudo! Esta plataforma da FILDA é igualmente excelente. O dinheiro caiu na hora, sem burocracia nenhuma." },
        { name: "Ana Paula R.", color: "#4F46E5", text: "O BAI Directo tem melhorado muito, mas o Express ainda lidera. Recomendo muito este site da FILDA, já recebi os meus kz sem problemas." },
        { name: "Simão Gaspar", color: "#D97706", text: "Express é imbatível na rapidez! E este site complementa bem a experiência, pagar com Express saiu instantâneo. Nota máxima para ambos." },
        { name: "Filomena B.", color: "#7C3AED", text: "Votei no BAI Directo. O atendimento digital do BAI melhorou muito. Quanto ao saque aqui na FILDA, foi aprovado em menos de 2 minutos. Incrível!" },
        { name: "Osvaldo Neto", color: "#DC2626", text: "Questão muito bem escolhida! Uso os dois serviços. Esta plataforma é séria, paga mesmo. Já são 3 saques feitos com sucesso pela minha parte." }
      ]
    },
    {
      category: "🚌 Transporte Terrestre",
      question: "Qual é o melhor serviço de viagem terrestre?",
      optionA: {
        label: "Macon",
        tag: "TRANSPORTE",
        img: "https://i.postimg.cc/JtRbp3rt/MACON.jpg"
      },
      optionB: {
        label: "Huambo Express",
        tag: "EXPRESSO",
        img: "https://i.postimg.cc/K3cB4bpZ/Huambo-express.jpg"
      },
      percentA: 64,
      percentB: 36,
      reward: 5000,
      rating: "4.7",
      ratingCount: "3,2 milhões de avaliações",
      reviews: [
        { name: "João Kimbembe", color: "#059669", text: "Viajo sempre de Macon para o Huambo, muito confortável. E já consegui o meu primeiro pagamento aqui no site da FILDA. Muito bom!" },
        { name: "Mariana F.", color: "#4F46E5", text: "Huambo Express tem crescido muito. Gosto das opções que colocaram aqui, muito fácil ganhar o saldo e sacar depois." },
        { name: "Celestino M.", color: "#D97706", text: "Uso o Macon há anos, nunca me falharam. Esta pesquisa da FILDA é importante para valorizar as empresas angolanas. Já recebi o meu prémio!" },
        { name: "Rosa Tchioma", color: "#7C3AED", text: "O Huambo Express tem bons preços! E esta plataforma tem tudo organizado. Saquei os kwanzas em menos de 5 minutos. Muito profissional." },
        { name: "Eduardo Lara", color: "#DC2626", text: "Boa questão sobre transporte! Viajei nas duas empresas. Quanto à plataforma, é confiável mesmo. Primeiro saque caiu direto no meu Multicaixa." }
      ]
    },
    {
      category: "🏦 Atendimento Bancário",
      question: "Qual banco tem o melhor atendimento em Angola?",
      optionA: {
        label: "BAI",
        tag: "BANCO BAI",
        img: "https://i.postimg.cc/23C40dkn/Banco-Bai.jpg"
      },
      optionB: {
        label: "BFA",
        tag: "BANCO BFA",
        img: "https://i.postimg.cc/z3qnxwzV/BANCO-BFA.png"
      },
      percentA: 59,
      percentB: 41,
      reward: 5000,
      rating: "4.8",
      ratingCount: "5,1 milhões de avaliações",
      reviews: [
        { name: "Paulo Sebastião", color: "#059669", text: "O BAI tem inovado bastante. Já agora, obrigado à FILDA pela oportunidade de ganhar uns kwanzas extras só por dar a minha opinião honesta." },
        { name: "Teresa Lopes", color: "#4F46E5", text: "Prefiro o BFA, mas ambos são bons. O saque do dinheiro nesta plataforma funcionou muito bem! Processo todo simples e rápido." },
        { name: "Mário Afonso", color: "#D97706", text: "BAI tem o melhor app bancário de Angola. E a FILDA fez bem em criar esta plataforma. Já saquei 15.000 Kz duas vezes. Não há engano." },
        { name: "Conceição V.", color: "#7C3AED", text: "O BFA tem agências em todo lado, muito conveniente. Quanto a este site, é sério e paga. O meu marido também já participou e recebeu." },
        { name: "Benício F.", color: "#DC2626", text: "Questão difícil! Tenho conta nos dois bancos. A plataforma está muito bem feita, dá para usar no telemóvel sem problemas. Saldo creditado imediatamente." }
      ]
    },
    {
      category: "📺 Televisão por Assinatura",
      question: "Qual é o melhor serviço de TV?",
      optionA: {
        label: "ZAP",
        tag: "ZAP TV",
        img: "https://i.postimg.cc/NLQ1d8sP/ZAP.jpg"
      },
      optionB: {
        label: "DSTV",
        tag: "DSTV ANGOLA",
        img: "https://i.postimg.cc/fkMx87z2/DSTV.png"
      },
      percentA: 53,
      percentB: 47,
      reward: 5000,
      rating: "4.6",
      ratingCount: "9,4 milhões de avaliações",
      reviews: [
        { name: "Ricardo Neto", color: "#059669", text: "ZAP tem os melhores canais em português! Obrigado por esta iniciativa da FILDA. O dinheiro entrou direto no meu Express no mesmo dia." },
        { name: "Fátima Dias", color: "#4F46E5", text: "Sempre fui cliente DSTV pelos canais desportivos. A votação aqui é rápida e o pagamento é garantido. Recomendo a todos sem hesitar." },
        { name: "Isaías Tomás", color: "#D97706", text: "ZAP está a melhorar muito! Esta pesquisa é importante para as empresas angolanas saberem o que o público quer. Recebi o meu saldo sem problemas." },
        { name: "Lurdes Pinto", color: "#7C3AED", text: "DSTV tem mais variedade de canais. Mas o mais importante é que esta plataforma é honesta e paga mesmo. Saquei 15.000 Kz para o BAI ontem." },
        { name: "Hermínio B.", color: "#DC2626", text: "Tenho ZAP em casa e estou satisfeito. Plataforma muito boa, interface limpa e fácil. O saque foi processado muito rápido. Vou indicar aos amigos." }
      ]
    },
    {
      category: "🛒 Comércio & Hipermercados",
      question: "Qual é o maior hipermercado?",
      optionA: {
        label: "KERO",
        tag: "HIPER KERO",
        img: "https://i.postimg.cc/HjTQ60YS/KERO.jpg"
      },
      optionB: {
        label: "Shoprite",
        tag: "SHOPRITE",
        img: "https://i.postimg.cc/14ypv0mv/SHoprite.png"
      },
      percentA: 67,
      percentB: 33,
      reward: 5000,
      rating: "4.9",
      ratingCount: "7,8 milhões de avaliações",
      reviews: [
        { name: "Helena Valente", color: "#059669", text: "Kero tem tudo! E este site da FILDA é o melhor que já vi para ganhar um extra no final do mês. Saque aprovado em minutos, parabéns!" },
        { name: "Bruno Tavares", color: "#4F46E5", text: "Shoprite é clássico, sempre com bons preços. Achei o processo de avaliação muito simples e transparente. Kz creditados na hora." },
        { name: "Esperança M.", color: "#D97706", text: "Faço compras no Kero todas as semanas. É o mais completo de Luanda. Quanto à plataforma, saquei os 15.000 Kz sem nenhum problema." },
        { name: "Jacinto Ramos", color: "#7C3AED", text: "O Shoprite tem ótimos preços nas frutas e legumes. Gostei muito desta pesquisa. O sistema de saldo acumulado é muito motivante, continua a crescer!" },
        { name: "Ângela Beto", color: "#DC2626", text: "Kero e Shoprite são os meus favoritos! Esta questão foi a mais fácil de responder. Já recebi os meus kwanzas, processo muito rápido e sem complicações." }
      ]
    },
    {
      category: "📱 Telecomunicações",
      question: "Qual é a melhor operadora móvel?",
      optionA: {
        label: "Unitel",
        tag: "UNITEL 5G",
        img: "https://i.postimg.cc/Rqvcg1SX/unitel.jpg"
      },
      optionB: {
        label: "Africell",
        tag: "AFRICELL 4G+",
        img: "https://i.postimg.cc/5jfws54p/Africell.webp"
      },
      percentA: 74,
      percentB: 26,
      reward: 5000,
      rating: "4.8",
      ratingCount: "12,3 milhões de avaliações",
      reviews: [
        { name: "Rui Pereira", color: "#059669", text: "A Unitel continua a liderar em cobertura e qualidade. O meu saque nesta plataforma da FILDA foi aprovado em segundos. Muito eficiente!" },
        { name: "Sara Macedo", color: "#4F46E5", text: "Uso as duas operadoras! Muito boa a pesquisa. Recebi os 15.000 Kz sem qualquer problema na minha conta BAI. Recomendo esta plataforma." },
        { name: "Tobias Neto", color: "#D97706", text: "Unitel 5G chegou à minha zona e a diferença é enorme! Aqui na FILDA também está tudo rápido e eficiente. Saldo creditado instantaneamente." },
        { name: "Madalena C.", color: "#7C3AED", text: "Africell tem os planos mais baratos! Mas em cobertura a Unitel ainda ganha. Esta plataforma é muito séria. O meu cunhado também já sacou os kz." },
        { name: "Gerson Mateus", color: "#DC2626", text: "Questão importante para os angolanos! A concorrência entre as operadoras beneficia todos. E aqui na FILDA, o sistema de recompensa é muito bom mesmo." }
      ]
    },
    {
      category: "🎬 Entretenimento & TV",
      question: "Qual é o melhor canal de entretenimento?",
      optionA: {
        label: "Tarde é nossa",
        tag: "ENTRETENIMENTO",
        img: "https://i.postimg.cc/xq9K6Gf3/Tarde-e-nossa.jpg"
      },
      optionB: {
        label: "Na placa",
        tag: "PROGRAMA TV",
        img: "https://i.postimg.cc/Rqvcg1Sd/na-placa.png"
      },
      percentA: 48,
      percentB: 52,
      reward: 5000,
      rating: "4.5",
      ratingCount: "4,6 milhões de avaliações",
      reviews: [
        { name: "Miguel Andrade", color: "#059669", text: "Gosto mais do Na Placa, mas são os dois muito bons. O pagamento cai na hora, podem confiar. Já indiquei a 5 amigos que também receberam." },
        { name: "Cátia Rodrigues", color: "#4F46E5", text: "Tarde é Nossa sempre! Avaliei e o sistema contabilizou o meu saldo logo de seguida. Muito satisfeita com esta iniciativa da FILDA 2026." },
        { name: "Valentim Cruz", color: "#D97706", text: "Na Placa tem os melhores momentos de humor! Pergunta difícil. Mas o que importa é que os kz caíram direto na conta. Muito obrigado FILDA!" },
        { name: "Idalina M.", color: "#7C3AED", text: "Assisto os dois programas com a família toda. Esta pesquisa representa bem o que os angolanos gostam de ver. Processo de saque muito rápido!" },
        { name: "Renato Bispo", color: "#DC2626", text: "Tarde é Nossa tem ótimos convidados! E este site da FILDA tem uma interface muito limpa e profissional. Saldo subiu logo após confirmar a avaliação." }
      ]
    },
    {
      category: "🚖 Mobilidade Urbana",
      question: "Qual é o melhor aplicativo de viagens?",
      optionA: {
        label: "Yango",
        tag: "YANGO APP",
        img: "https://i.postimg.cc/dDJ85Rsm/yango.webp"
      },
      optionB: {
        label: "Heecth",
        tag: "HEECTH APP",
        img: "https://i.postimg.cc/SjmWgLSC/heect.jpg"
      },
      percentA: 79,
      percentB: 21,
      reward: 5000,
      rating: "4.9",
      ratingCount: "6,7 milhões de avaliações",
      reviews: [
        { name: "Fernando José", color: "#059669", text: "Yango é muito mais rápido e barato em Luanda! Excelente oportunidade para fazer dinheiro extra online. Saquei tudo sem problemas!" },
        { name: "Diana Cardoso", color: "#4F46E5", text: "O Heecth tem motoristas muito simpáticos e carros limpos. A plataforma da FILDA está a ajudar muita gente a ganhar kwanzas extras honestamente." },
        { name: "Lourenço B.", color: "#D97706", text: "Yango chegou a Angola e mudou tudo! Preços justos, app funcional. Aqui na FILDA também está tudo funcional. Kz no bolso em menos de 10 minutos." },
        { name: "Esperança Neto", color: "#7C3AED", text: "Heecth é angolano, prefiro apoiar as nossas empresas! Mas reconheço que o Yango também é bom. Plataforma muito séria, saque confirmado ontem." },
        { name: "Waldir Santos", color: "#DC2626", text: "Uso Yango todos os dias para ir trabalhar. Muito cómodo! Esta pesquisa da FILDA é muito relevante. Recebi os 15.000 Kz diretamente no Express." }
      ]
    },
    {
      category: "🌐 Internet & Banda Larga",
      question: "Melhor serviço de internet de Angola:",
      optionA: {
        label: "ZAP FIBRA",
        tag: "FIBRA ÓPTICA",
        img: "https://i.postimg.cc/kD7xTNJ8/ZAP-FIBRA.jpg"
      },
      optionB: {
        label: "NET CASA 5G",
        tag: "INTERNET 5G",
        img: "https://i.postimg.cc/s13pTPjh/net-casa-5G.jpg"
      },
      percentA: 71,
      percentB: 29,
      reward: 5000,
      hasMessageBox: true,
      rating: "4.7",
      ratingCount: "5,9 milhões de avaliações",
      reviews: [
        { name: "António Kiaziku", color: "#059669", text: "O sistema de acúmulo de saldo é transparente e a interface é perfeita. Parabéns à organização por valorizar a opinião dos angolanos nas marcas da feira!" },
        { name: "Beatriz Loureiro", color: "#4F46E5", text: "ZAP Fibra não falha! Esta foi a minha última avaliação e o botão de saque já está disponível. Muito feliz com os 15.000 Kz que recebi." },
        { name: "Horácio F.", color: "#D97706", text: "NET CASA 5G tem ótima cobertura no meu bairro. Mas o ZAP Fibra é mais estável. De qualquer forma, esta plataforma funcionou perfeitamente do início ao fim." },
        { name: "Matilde Sousa", color: "#7C3AED", text: "ZAP Fibra em casa e sem cortes há 6 meses! Muito satisfeita. E esta pesquisa da FILDA é uma ótima ideia. Já recebi os kwanzas, obrigada!" },
        { name: "Deolindo M.", color: "#DC2626", text: "Internet boa é essencial em 2026! A NET CASA 5G está a crescer muito. Aqui na FILDA, o processo todo foi simples e o pagamento foi imediato." }
      ]
    }
  ];

  // Preload Images para carregamento rápido das páginas seguintes
  function preloadImages() {
    evaluations.forEach(eval => {
      if (eval.optionA && eval.optionA.img) {
        const imgA = new Image();
        imgA.src = eval.optionA.img;
      }
      if (eval.optionB && eval.optionB.img) {
        const imgB = new Image();
        imgB.src = eval.optionB.img;
      }
    });
  }
  
  // Inicia o pré-carregamento logo que o script carrega (na landing page)
  preloadImages();

  // Live Activity Ticker Toast Rotation
  const liveToasts = [
    "António K. acabou de sacar 15.000 Kz via Express",
    "Mateus M. recebeu 15.000 Kz via Multicaixa",
    "Joana P. completou as 10 avaliações da FILDA",
    "Eurico S. sacou 15.000 Kz para conta BAI",
    "Katy C. acabou de avaliar a categoria Mídia"
  ];
  let liveToastIdx = 0;
  const liveUserToastEl = document.getElementById('live-user-toast');
  setInterval(() => {
    liveToastIdx = (liveToastIdx + 1) % liveToasts.length;
    if (liveUserToastEl) {
      liveUserToastEl.style.opacity = 0;
      setTimeout(() => {
        liveUserToastEl.textContent = liveToasts[liveToastIdx];
        liveUserToastEl.style.opacity = 1;
      }, 300);
    }
  }, 4000);

  // ============================================================
  // Som de Sucesso / Recompensa — Marimba Ascendente
  // ============================================================
  function playSaleSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Compressor para som mais cheio e profissional
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -18;
      compressor.knee.value = 8;
      compressor.ratio.value = 4;
      compressor.attack.value = 0.002;
      compressor.release.value = 0.15;
      compressor.connect(ctx.destination);

      function note(freq, startTime, duration, volume = 0.5) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Triangle wave = som quente tipo marimba/xilofone
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        // Ataque rápido, decaimento natural
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(volume, startTime + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        osc.connect(gain);
        gain.connect(compressor);
        osc.start(startTime);
        osc.stop(startTime + duration + 0.05);
      }

      const t = ctx.currentTime;
      const gap = 0.13; // espaço entre notas

      // Melodia ascendente: Mi → Sol → Si → Mi (alegre e recompensador)
      note(659.25, t,             0.25, 0.45); // E5
      note(783.99, t + gap,       0.25, 0.5);  // G5
      note(987.77, t + gap * 2,   0.28, 0.5);  // B5
      note(1318.5, t + gap * 3,   0.45, 0.55); // E6 (nota final mais longa)

    } catch (e) {
      console.log('Audio error:', e);
    }
  }

  // State Management
  let currentIndex = 0;
  let totalBalance = 0;
  let selectedOption = null;

  // DOM Elements
  const balanceBadge = document.getElementById('balance-badge');
  const balanceAmountEl = document.getElementById('balance-amount');
  
  const stepBadgeEl = document.getElementById('step-badge');
  const progressText = document.getElementById('progress-text');
  const progressPercent = document.getElementById('progress-percent');
  const progressFill = document.getElementById('progress-fill');

  const questionCategoryEl = document.getElementById('question-category');
  const questionText = document.getElementById('question-text');
  
  const optionABtn = document.getElementById('option-a-btn');
  const optionBBtn = document.getElementById('option-b-btn');
  const imgA = document.getElementById('img-a');
  const imgB = document.getElementById('img-b');
  const tagA = document.getElementById('tag-a');
  const tagB = document.getElementById('tag-b');
  const labelA = document.getElementById('label-a');
  const labelB = document.getElementById('label-b');

  const userMessageBox = document.getElementById('user-message-box');
  const userMessageInput = document.getElementById('user-message-input');
  const reviewsList = document.getElementById('reviews-list');

  // Chart Elements
  const chartLabelA = document.getElementById('chart-label-a');
  const chartLabelB = document.getElementById('chart-label-b');
  const chartFillA = document.getElementById('chart-fill-a');
  const chartFillB = document.getElementById('chart-fill-b');
  const chartPercentA = document.getElementById('chart-percent-a');
  const chartPercentB = document.getElementById('chart-percent-b');

  const overallRatingScore = document.getElementById('overall-rating-score');
  const overallRatingCount = document.getElementById('overall-rating-count');

  const particlesContainer = document.getElementById('particles-container');
  const btnSubmit = document.getElementById('btn-submit');
  const rewardToast = document.getElementById('reward-toast');
  const toastAmount = document.getElementById('toast-amount');

  const completionModal = document.getElementById('completion-modal');
  const finalBalanceEl = document.getElementById('final-balance');
  const btnPayout = document.getElementById('btn-payout');

  // Format Currency Kz
  function formatKz(amount) {
    return amount.toLocaleString('pt-AO') + ' Kz';
  }

  // Smooth Count-Up Animation for Balance
  function animateBalance(start, end, duration) {
    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.floor(start + (end - start) * progress);
      balanceAmountEl.textContent = formatKz(currentVal);
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  // Floating Kz Particle Effect
  function spawnParticle(x, y, text) {
    const particle = document.createElement('div');
    particle.className = 'floating-kz-particle';
    particle.textContent = text;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1200);
  }

  // Load Question Card Content
  function loadQuestion(index) {
    if (index >= evaluations.length) {
      showCompletionModal();
      return;
    }

    const current = evaluations[index];

    // Reset selection
    selectedOption = null;
    optionABtn.classList.remove('selected');
    optionBBtn.classList.remove('selected');
    btnSubmit.disabled = true;

    // Update Progress
    const stepNumber = index + 1;
    const totalSteps = evaluations.length;
    const percent = Math.round((stepNumber / totalSteps) * 100);

    stepBadgeEl.textContent = stepNumber;
    progressText.textContent = `Avaliação ${stepNumber} de ${totalSteps}`;
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;

    // Update Category & Question
    questionCategoryEl.textContent = current.category;
    questionText.textContent = current.question;

    imgA.src = current.optionA.img;
    imgA.alt = current.optionA.label;
    tagA.textContent = current.optionA.tag;
    labelA.textContent = current.optionA.label;

    imgB.src = current.optionB.img;
    imgB.alt = current.optionB.label;
    tagB.textContent = current.optionB.tag;
    labelB.textContent = current.optionB.label;

    // Handle Message Box for Last Question
    if (current.hasMessageBox) {
      userMessageBox.style.display = 'flex';
    } else {
      userMessageBox.style.display = 'none';
    }

    // Update Comparative Chart Bars (Option A vs Option B)
    if (chartLabelA && chartLabelB) {
      chartLabelA.textContent = current.optionA.label;
      chartLabelB.textContent = current.optionB.label;

      chartFillA.style.width = `${current.percentA}%`;
      chartPercentA.textContent = `${current.percentA}%`;

      chartFillB.style.width = `${current.percentB}%`;
      chartPercentB.textContent = `${current.percentB}%`;
    }

    // Update Overall Ratings
    if (overallRatingScore && overallRatingCount) {
      overallRatingScore.textContent = current.rating || "4.9";
      overallRatingCount.textContent = current.ratingCount || "10,8 milhões de avaliações";
    }

    // Update Reviews
    if (reviewsList && current.reviews) {
      reviewsList.innerHTML = '';
      current.reviews.forEach(review => {
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review-item';
        reviewEl.innerHTML = `
          <div class="review-header">
            <div class="user-avatar-ring">
              <div class="user-avatar" style="background-color: #059669;">${review.name.charAt(0)}</div>
            </div>
            <div class="user-info">
              <div class="user-name-wrapper">
                <h4 class="user-name">${review.name}</h4>
                <span class="verified-tag">✔ Saque Confirmado</span>
              </div>
              <div class="user-meta">
                <div class="stars-row small">★★★★★</div>
                <span class="review-date">Há poucas horas</span>
              </div>
            </div>
          </div>
          <p class="review-text">${review.text}</p>
        `;
        reviewsList.appendChild(reviewEl);
      });
    }
  }

  // Option Selection Handler
  function selectOption(option) {
    selectedOption = option;

    if (option === 'A') {
      optionABtn.classList.add('selected');
      optionBBtn.classList.remove('selected');
    } else {
      optionBBtn.classList.add('selected');
      optionABtn.classList.remove('selected');
    }

    btnSubmit.disabled = false;
  }

  optionABtn.addEventListener('click', () => selectOption('A'));
  optionBBtn.addEventListener('click', () => selectOption('B'));

  // Submit Answer & Increment Kz Balance
  btnSubmit.addEventListener('click', (e) => {
    if (!selectedOption) return;

    // If message box is present and filled, post user message to reviews
    if (evaluations[currentIndex].hasMessageBox && userMessageInput.value.trim() !== '') {
      const userText = userMessageInput.value.trim();
      const newReview = document.createElement('div');
      newReview.className = 'review-item';
      newReview.innerHTML = `
        <div class="review-header">
          <div class="user-avatar-ring">
            <div class="user-avatar" style="background-color: #005CB9;">V</div>
          </div>
          <div class="user-info">
            <div class="user-name-wrapper">
              <h4 class="user-name">Você (Avaliador FILDA)</h4>
              <span class="verified-tag">✔ Sua Mensagem</span>
            </div>
            <div class="user-meta">
              <div class="stars-row small">★★★★★</div>
              <span class="review-date">Agora mesmo</span>
            </div>
          </div>
        </div>
        <p class="review-text">${userText}</p>
        <span class="useful-count">Sua mensagem foi enviada aos próximos usuários!</span>
      `;
      if (reviewsList) {
        reviewsList.insertBefore(newReview, reviewsList.firstChild);
      }
    }

    const reward = evaluations[currentIndex].reward;
    const oldBalance = totalBalance;
    totalBalance += reward;

    // Trigger Floating Particle Animation from button position
    const rect = btnSubmit.getBoundingClientRect();
    spawnParticle(rect.left + rect.width / 2, rect.top, `+${formatKz(reward)}`);

    // Smooth count-up balance animation
    animateBalance(oldBalance, totalBalance, 700);

    balanceBadge.classList.add('pulse');
    setTimeout(() => balanceBadge.classList.remove('pulse'), 600);

    // Show Reward Toast
    toastAmount.textContent = `+${formatKz(reward)} adicionados`;
    rewardToast.classList.add('show');
    setTimeout(() => rewardToast.classList.remove('show'), 2200);

    // Play sale sound (Hotmart/Kiwify style - Web Audio API)
    playSaleSound();

    // Fire Confetti
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00A3E0', '#005CB9', '#E50066', '#FFB81C', '#059669']
      });
    }

    // Advance to next evaluation
    currentIndex++;
    
    // Smooth transition
    setTimeout(() => {
      loadQuestion(currentIndex);
    }, 450);
  });

  // Interatividade dos Botões "Sim / Não" dos Depoimentos
  document.querySelectorAll('.useful-actions').forEach(container => {
    const buttons = container.querySelectorAll('.btn-helpful');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  // Show Modal when 10 evaluations are finished
  function showCompletionModal() {
    finalBalanceEl.textContent = formatKz(totalBalance);
    completionModal.classList.add('active');
  }

  // Elementos das novas visões
  const defaultModalCard = document.getElementById('completion-main-card');
  const payoutFormView = document.getElementById('payout-form-view');
  const loadingView = document.getElementById('loading-view');
  const videoPage = document.getElementById('video-page');
  const btnSacarAgora = document.getElementById('btn-sacar-agora');

  // Alternar entre Express e IBAN
  const methodRadios = document.querySelectorAll('input[name="payout-method"]');
  const fieldsExpress = document.getElementById('fields-express');
  const fieldsIban = document.getElementById('fields-iban');

  methodRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'express') {
        fieldsExpress.style.display = 'block';
        fieldsIban.style.display = 'none';
      } else {
        fieldsExpress.style.display = 'none';
        fieldsIban.style.display = 'block';
      }
    });
  });

  // Ao clicar em Levantar
  btnPayout.addEventListener('click', () => {
    defaultModalCard.style.display = 'none';
    payoutFormView.style.display = 'block';
  });

  // Ao clicar em Sacar Agora no formulário
  if (btnSacarAgora) {
    btnSacarAgora.addEventListener('click', () => {
      // Ocultar formulário, mostrar loading
      payoutFormView.style.display = 'none';
      loadingView.style.display = 'flex';

      // Aguardar 3 segundos
      setTimeout(() => {
        // Ocultar tudo e abrir a página de vídeo a ecrã inteiro
        completionModal.classList.remove('active');
        // Hide main content areas
        const mainLayout = document.querySelector('.main-layout');
        const appHeader = document.querySelector('.app-header');
        const liveBar = document.querySelector('.live-activity-bar');
        if (mainLayout) mainLayout.style.display = 'none';
        if (appHeader) appHeader.style.display = 'none';
        if (liveBar) liveBar.style.display = 'none';
        videoPage.style.display = 'flex';
        loadVturbPlayer();


        // Start 4-minute countdown
        startCountdown(4 * 60);
      }, 3000);
    });
  }

  // Countdown Timer Logic
  function startCountdown(totalSeconds) {
    const countdownEl = document.getElementById('countdown-timer');
    const countdownCard = document.getElementById('countdown-section');
    if (!countdownEl || !countdownCard) return;

    let remaining = totalSeconds;

    function updateDisplay() {
      const mins = Math.floor(remaining / 60);
      const secs = remaining % 60;
      countdownEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    updateDisplay();

    const interval = setInterval(() => {
      remaining--;
      if (remaining <= 0) {
        clearInterval(interval);
        countdownEl.textContent = '0:00';
        // Fade out the card silently
        countdownCard.style.transition = 'opacity 0.6s ease';
        countdownCard.style.opacity = '0';
        setTimeout(() => {
          countdownCard.style.display = 'none';
        }, 650);
      } else {
        updateDisplay();
      }
    }, 1000);
  }


  // View Navigation Elements
  const btnParticipar = document.getElementById('btn-participar');
  const landingPage = document.getElementById('landing-page');
  const registerPage = document.getElementById('register-page');
  const registerForm = document.getElementById('register-form');
  const registerSuccessModal = document.getElementById('register-success-modal');
  const appHeader = document.getElementById('app-header');
  const mainLayout = document.getElementById('main-layout');
  const liveBar = document.getElementById('live-activity-bar');

  // Landing -> Register
  if (btnParticipar) {
    btnParticipar.addEventListener('click', () => {
      landingPage.style.display = 'none';
      registerPage.style.display = 'flex'; // Register page is a flex container
    });
  }

  // Register -> Success -> Quiz
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page reload
      
      // Show success modal
      registerSuccessModal.style.display = 'flex';
      
      // Trigger confetti and sound
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 120,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#00A3E0', '#005CB9', '#E50066', '#FFB81C', '#059669']
        });
      }
      playSaleSound(); // We reuse the sale sound

      // Wait 3 seconds, then start quiz
      setTimeout(() => {
        registerSuccessModal.style.display = 'none';
        registerPage.style.display = 'none';
        
        if (appHeader) appHeader.style.display = 'block';
        if (mainLayout) mainLayout.style.display = 'flex';
        if (liveBar) liveBar.style.display = 'block';

        loadQuestion(0);
      }, 3000);
    });
  }

  // Interceptar Botão Voltar (Back Button)
  history.pushState(null, null, location.href);
  window.addEventListener('popstate', function () {
    const videoPage = document.getElementById('video-page');
    
    // Se já estiver na página do vídeo e tentar voltar, redireciona para a oferta externa
    if (videoPage && videoPage.style.display === 'flex') {
      window.location.href = 'https://lucky-wheel-treats.lovable.app/';
      return;
    }

    history.pushState(null, null, location.href); // Empurra um novo estado para não sair da página
    
    // Oculta todas as outras views possíveis
    const viewsToHide = [
      'landing-page', 
      'register-page', 
      'app-header', 
      'main-layout', 
      'live-activity-bar', 
      'payout-form-view', 
      'loading-view',
      'register-success-modal'
    ];
    
    viewsToHide.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
    
    // Mostra a página do vídeo diretamente
    if (videoPage) {
      videoPage.style.display = 'flex';
      loadVturbPlayer();

      
      // Inicia o contador caso não tenha iniciado antes
      startCountdown(240);
    }
  });

});
