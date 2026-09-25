/* ============================================================================
   CELINE PINTURAS — COMPORTAMENTO DO SITE
   Lê o arquivo conteudo.js e monta a página. Cuida do menu, da galeria,
   do lightbox, das animações e do formulário (que abre o WhatsApp pronto).
   Você normalmente NÃO precisa editar este arquivo.
   ============================================================================ */
(function () {
  "use strict";

  var C = window.CONTEUDO || {};

  /* -------------------------------------------------------------------------
     ÍCONES EM SVG (embutidos no código → nunca somem por causa de CDN/cache)
     ------------------------------------------------------------------------- */
  var ICONES = {
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.87 11.87 0 0 1-1.587-5.946C.16 5.335 5.494 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.519 5.26l-.999 3.648 3.969-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor"/></svg>',
    pincel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4.5l5 5-8 8-5 .9.9-5z"/><path d="M3 21c2-1.5 3-3 3-4.5"/><path d="M13 6l5 5"/></svg>',
    paleta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 0 0 0 18c1.7 0 2-1.3 1.2-2.2-.7-.9-.4-2 .8-2h1.5A4.5 4.5 0 0 0 20 12 8.7 8.7 0 0 0 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="14" cy="7.5" r="1"/><circle cx="16.5" cy="11" r="1"/></svg>',
    alianca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="9" cy="14" r="5.5"/><circle cx="15" cy="14" r="5.5"/><path d="M7.4 8l1.6-3 1.6 3" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.4 8l1.6-3 1.6 3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    estrela: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.5 5.5L20 9.3l-4 4 1 5.7-5-2.8-5 2.8 1-5.7-4-4 5.5-.8z"/></svg>',
    lupa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 15l6-6"/><path d="M11 7l1-1a4 4 0 0 1 6 6l-1 1"/><path d="M13 17l-1 1a4 4 0 0 1-6-6l1-1"/></svg>',
    balao: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.5a7 7 0 0 1-7 7H8.5L5 21v-3.2A7 7 0 1 1 20 11.5z"/><circle cx="8.5" cy="11.5" r="1"/><circle cx="12" cy="11.5" r="1"/><circle cx="15.5" cy="11.5" r="1"/></svg>',
    fogo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c.6 2.4-.4 4-1.8 5.3C8.5 9.9 7 11.4 7 14a5 5 0 0 0 10 0c0-2-1-3.6-2-5-.4 1-1 1.6-1.8 2 .3-2.4-.7-5.3-1.2-8z"/></svg>'
  };

  function pintarIcones() {
    document.querySelectorAll("[data-ico]").forEach(function (el) {
      var nome = el.getAttribute("data-ico");
      if (ICONES[nome]) el.innerHTML = ICONES[nome];
    });
  }

  /* ----------------------------- ATALHOS ------------------------------------ */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function criar(tag, classe) { var e = document.createElement(tag); if (classe) e.className = classe; return e; }
  function setTexto(id, txt) { var e = document.getElementById(id); if (e && txt != null) e.textContent = txt; }

  /* Link do WhatsApp a partir do número + mensagem */
  function linkWhats(mensagem) {
    var num = (C.contato && C.contato.whatsapp ? C.contato.whatsapp : "").replace(/\D/g, "");
    var texto = encodeURIComponent(mensagem || (C.contato && C.contato.whatsappMensagem) || "Olá!");
    return "https://wa.me/" + num + "?text=" + texto;
  }

  /* Imagem com proteção contra "imagem quebrada": se o arquivo não existir,
     mostra automaticamente um placeholder elegante da paleta. */
  function imagem(src, alt, fallback) {
    var img = criar("img");
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.dataset.full = src;
    img.className = "img-fade";
    img.addEventListener("load", function () { img.classList.add("img-fade--ok"); });
    img.src = src;
    img.addEventListener("error", function onErr() {
      img.removeEventListener("error", onErr);
      img.src = fallback || "assets/img/placeholder.svg";
      img.dataset.placeholder = "1";
      img.classList.add("img-fade--ok");
    });
    return img;
  }

  /* Cria um item de galeria clicável (abre lightbox) */
  function criarObra(item, fallback) {
    var fig = criar("button", "obra");
    fig.type = "button";
    fig.setAttribute("aria-label", "Ampliar: " + (item.alt || "obra"));
    fig.appendChild(imagem(item.src, item.alt, fallback));
    var lupa = criar("span", "obra__lupa");
    lupa.innerHTML = ICONES.lupa;
    fig.appendChild(lupa);
    fig.addEventListener("click", function () { abrirLightboxDe(fig); });
    return fig;
  }

  /* Resolve a ação de um botão (mensagem personalizada / orçamento / aula / contato) */
  function aplicarAcao(el, acao, mensagem) {
    if (mensagem) {
      el.href = linkWhats(mensagem); el.target = "_blank"; el.rel = "noopener";
    } else if (acao === "orcamento") {
      el.href = linkWhats("Olá, Celine! Gostaria de um orçamento.");
      el.target = "_blank"; el.rel = "noopener";
    } else if (acao === "aula") {
      el.href = linkWhats("Olá, Celine! Tenho interesse nas aulas de pintura.");
      el.target = "_blank"; el.rel = "noopener";
    } else {
      el.href = "#contato";
    }
  }

  /* =========================================================================
     MONTAGEM DAS SEÇÕES
     ========================================================================= */
  function montar() {
    /* --- HERO --- */
    if (C.hero) {
      var heroImg = $("#hero-img");
      if (heroImg) {
        heroImg.alt = "Celine pintando no ateliê";
        heroImg.src = C.hero.imagem;
        heroImg.addEventListener("error", function () { heroImg.src = "assets/img/placeholder-hero.svg"; });
      }
      setTexto("hero-eyebrow", C.hero.fraseEyebrow);
      setTexto("hero-titulo", C.hero.titulo);
      setTexto("hero-sub", C.hero.subtitulo);
      var b1 = $("#hero-btn1"); if (b1) b1.textContent = C.hero.botaoPrimario;
      var b2 = $("#hero-btn2"); if (b2) b2.textContent = C.hero.botaoSecundario;
    }

    /* --- CONHEÇA O ATELIÊ (carrossel) --- */
    if (C.espaco) {
      setTexto("espaco-eyebrow", C.espaco.eyebrow);
      setTexto("espaco-titulo", C.espaco.titulo);
      setTexto("espaco-texto", C.espaco.texto);
      montarCarrossel(C.espaco.itens);
    }

    /* --- SOBRE --- */
    if (C.sobre) {
      var sImg = $("#sobre-img");
      if (sImg) { sImg.alt = "Retrato da artista Celine"; sImg.src = C.sobre.imagem;
        sImg.addEventListener("error", function () { sImg.src = "assets/img/placeholder-portrait.svg"; }); }
      setTexto("sobre-eyebrow", C.sobre.eyebrow);
      setTexto("sobre-titulo", C.sobre.titulo);
      var paras = $("#sobre-paragrafos");
      if (paras && C.sobre.paragrafos) C.sobre.paragrafos.forEach(function (t) { var p = criar("p"); p.textContent = t; paras.appendChild(p); });
      setTexto("sobre-assinatura", C.sobre.assinatura);
    }

    /* --- SERVIÇOS --- */
    var grade = $("#servicos-grid");
    if (grade && C.servicos) {
      C.servicos.forEach(function (s, i) {
        var card = criar("article", "servico reveal");
        card.style.transitionDelay = Math.min(i, 4) * 70 + "ms";
        var ic = criar("div", "servico__ico"); ic.innerHTML = ICONES[s.icone] || ICONES.pincel;
        var h = criar("h3"); h.textContent = s.titulo;
        var p = criar("p"); p.textContent = s.texto;
        var a = criar("a"); a.textContent = s.botao; aplicarAcao(a, s.acao, s.mensagem);
        card.append(ic, h, p, a);
        grade.appendChild(card);
      });
    }

    /* --- PINTURA AO VIVO --- */
    if (C.pinturaAoVivo) {
      var pv = C.pinturaAoVivo;
      setTexto("aovivo-eyebrow", pv.eyebrow);
      setTexto("aovivo-titulo", pv.titulo);
      setTexto("aovivo-texto", pv.texto);
      var dest = $("#aovivo-destaques");
      if (dest && pv.destaques) pv.destaques.forEach(function (d) { var li = criar("li"); li.textContent = d; dest.appendChild(li); });
      preencherGaleria("#aovivo-galeria", pv.galeria, "assets/img/placeholder.svg", true);
      montarVideos("#aovivo-videos", pv.videos, "Vídeos da pintura ao vivo");
    }

    /* --- ATELIÊ (com filtros) --- */
    if (C.atelie) {
      setTexto("atelie-eyebrow", C.atelie.eyebrow);
      setTexto("atelie-titulo", C.atelie.titulo);
      setTexto("atelie-texto", C.atelie.texto);
      montarFiltros("#atelie-filtros", "#atelie-galeria", C.atelie.categorias, C.atelie.obras);
      montarVideos("#atelie-videos", C.atelie.videos, "Vídeo do ateliê");
    }

    /* --- AULAS --- */
    if (C.aulas) {
      var au = C.aulas;
      setTexto("aulas-eyebrow", au.eyebrow);
      setTexto("aulas-titulo", au.titulo);
      setTexto("aulas-texto", au.texto);
      var met = $("#aulas-metodologia");
      if (met && au.metodologia) au.metodologia.forEach(function (m) {
        var it = criar("div", "metodologia__item");
        var h = criar("h4"); h.textContent = m.titulo;
        var p = criar("p"); p.textContent = m.texto;
        it.append(h, p); met.appendChild(it);
      });
      setTexto("aulas-publico", au.publicoAlvo);
      var ab = $("#aulas-btn"); if (ab) { ab.textContent = au.botao; aplicarAcao(ab, au.acao, au.mensagem); }
      preencherGaleria("#aulas-galeria", au.fotos, "assets/img/placeholder.svg", true);
      montarVideos("#aulas-videos", au.videos, "Vídeo das aulas");
    }

    /* --- GALERIA DOS ALUNOS --- */
    if (C.alunos) {
      setTexto("alunos-eyebrow", C.alunos.eyebrow);
      setTexto("alunos-titulo", C.alunos.titulo);
      setTexto("alunos-texto", C.alunos.texto);
      preencherGaleria("#alunos-galeria", C.alunos.fotos, "assets/img/placeholder.svg", true);
    }

    /* --- PROCESSO CRIATIVO --- */
    if (C.processo) {
      var pr = C.processo;
      setTexto("processo-eyebrow", pr.eyebrow);
      setTexto("processo-titulo", pr.titulo);
      setTexto("processo-texto", pr.texto);
      var et = $("#processo-etapas");
      if (et && pr.etapas) pr.etapas.forEach(function (e) {
        var li = criar("li", "etapa reveal");
        var h = criar("h4"); h.textContent = e.titulo;
        var p = criar("p"); p.textContent = e.texto;
        li.append(h, p); et.appendChild(li);
      });
      preencherGaleria("#processo-galeria", pr.fotos, "assets/img/placeholder.svg", true);
      montarVideos("#processo-videos", pr.videos, "Vídeos do processo criativo");
    }

    /* --- DEPOIMENTOS (abas) --- */
    if (C.depoimentos) {
      setTexto("dep-eyebrow", C.depoimentos.eyebrow);
      setTexto("dep-titulo", C.depoimentos.titulo);
      montarDepoimentos(C.depoimentos.grupos);
    }

    /* --- FAQ --- */
    if (C.faq) {
      setTexto("faq-eyebrow", C.faq.eyebrow);
      setTexto("faq-titulo", C.faq.titulo);
      montarFaq(C.faq.itens);
    }

    /* --- CONTATO (canais) --- */
    montarCanais();

    /* --- RODAPÉ --- */
    if (C.rodape) { setTexto("rodape-frase", C.rodape.frase); setTexto("rodape-credito", "© " + new Date().getFullYear() + " " + (C.rodape.creditoTexto || "Celine Pinturas")); }
    montarRedesRodape();

    /* --- WhatsApp flutuante + CTAs --- */
    var flut = $("#whats-flutuante");
    if (flut) flut.href = linkWhats();

    /* Botões estáticos com data-acao / data-msg (ex.: Reservar minha data) */
    document.querySelectorAll("a[data-acao]").forEach(function (el) {
      aplicarAcao(el, el.getAttribute("data-acao"), el.getAttribute("data-msg"));
    });
  }

  /* Preenche uma galeria simples (grid) */
  function preencherGaleria(sel, lista, fallback, mosaico) {
    var alvo = $(sel);
    if (!alvo || !lista) return;
    lista.forEach(function (item) { alvo.appendChild(criarObra(item, fallback)); });
    if (mosaico) alvo.classList.add("galeria-mosaico");
  }

  /* Galeria do ateliê com filtros por categoria */
  function montarFiltros(selFiltros, selGaleria, categorias, obras) {
    var fbox = $(selFiltros), gbox = $(selGaleria);
    if (!fbox || !gbox || !obras) return;

    obras.forEach(function (o) {
      var el = criarObra(o, "assets/img/placeholder.svg");
      el.dataset.categoria = o.categoria || "todos";
      gbox.appendChild(el);
    });

    (categorias || [{ id: "todos", nome: "Todas" }]).forEach(function (cat, i) {
      var btn = criar("button", "filtro" + (i === 0 ? " ativo" : ""));
      btn.type = "button";
      btn.textContent = cat.nome;
      btn.setAttribute("role", "tab");
      btn.addEventListener("click", function () {
        fbox.querySelectorAll(".filtro").forEach(function (b) { b.classList.remove("ativo"); });
        btn.classList.add("ativo");
        gbox.querySelectorAll(".obra").forEach(function (o) {
          var mostra = cat.id === "todos" || o.dataset.categoria === cat.id;
          o.style.display = mostra ? "" : "none";
        });
      });
      fbox.appendChild(btn);
    });
  }

  /* Vídeos (YouTube embed ou arquivo .mp4)
     Cuidados que evitam os bugs comuns em celular:
     - playsinline: toca DENTRO da página (iOS não força tela cheia).
     - <source type="video/mp4">: o navegador reconhece o formato (evita "só áudio").
     - poster (cartaz): mostra uma imagem antes de tocar.
     - preload="metadata": carrega rápido sem baixar o vídeo todo.
     - fallback: link para abrir/baixar caso o navegador não suporte. */
  /* Cria UM quadro de vídeo (figure.video-frame). Usado tanto na lista de
     vídeos das seções quanto no carrossel do ateliê.
     Aceita v.tipo OU v.fonte com "youtube" / "arquivo". */
  function criarVideoFrame(v, tituloFallback) {
    var frame = criar("figure", "video-frame");
    var ehYoutube = (v.fonte || v.tipo) === "youtube";

    if (ehYoutube) {
      var ifr = criar("iframe");
      ifr.src = v.src; ifr.title = v.titulo || tituloFallback || "Vídeo"; ifr.loading = "lazy";
      ifr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      ifr.allowFullscreen = true;
      frame.appendChild(ifr);
    } else {
      var vid = criar("video");
      vid.controls = true;
      vid.preload = "metadata";
      vid.playsInline = true;
      vid.setAttribute("playsinline", "");            // iOS
      vid.setAttribute("webkit-playsinline", "");     // iOS antigo
      vid.setAttribute("controlslist", "nodownload");
      if (v.titulo) vid.setAttribute("aria-label", v.titulo);
      if (v.cartaz) {
        vid.poster = v.cartaz;
        // se o cartaz não existir, remove para não ficar quebrado
        var t = new Image(); t.onerror = function () { vid.removeAttribute("poster"); }; t.src = v.cartaz;
      }
      var src = criar("source");
      src.src = v.src; src.type = "video/mp4";
      vid.appendChild(src);
      // mensagem/abertura alternativa caso o navegador não toque o vídeo
      var fb = criar("p", "video-fallback");
      var a = criar("a"); a.href = v.src; a.target = "_blank"; a.rel = "noopener";
      a.textContent = "Abrir o vídeo";
      fb.appendChild(a);
      vid.appendChild(fb);
      // descobre se é vertical assim que os metadados carregam (ajusta o enquadramento)
      vid.addEventListener("loadedmetadata", function () {
        if (vid.videoHeight > vid.videoWidth) frame.classList.add("video-frame--vertical");
      });
      frame.appendChild(vid);
    }

    if (v.titulo) {
      var cap = criar("figcaption", "video-legenda");
      cap.textContent = v.titulo;
      frame.appendChild(cap);
    }
    return frame;
  }

  function montarVideos(sel, lista, titulo) {
    var alvo = $(sel);
    if (!alvo || !lista || !lista.length) return;
    var grid = criar("div", "videos");
    lista.forEach(function (v) { grid.appendChild(criarVideoFrame(v, titulo)); });
    alvo.appendChild(grid);
  }

  /* =========================================================================
     CARROSSEL "CONHEÇA O ATELIÊ" — fotos e vídeos lado a lado.
     Arraste no celular; setas (ou rolar) no computador. As fotos abrem no
     lightbox (sem cortar). Os vídeos tocam dentro da página.
     ========================================================================= */
  function montarCarrossel(itens) {
    var track = $("#espaco-track");
    if (!track || !itens || !itens.length) return;

    itens.forEach(function (it) {
      if (it.tipo === "video") {
        var vslide = criar("div", "carrossel__slide carrossel__slide--video");
        vslide.appendChild(criarVideoFrame(it, "Vídeo do ateliê"));
        track.appendChild(vslide);
      } else {
        // foto: reutiliza criarObra (botão .obra) para o lightbox funcionar
        var foto = criarObra(it, "assets/img/placeholder.svg");
        foto.classList.add("carrossel__slide", "carrossel__slide--foto");
        track.appendChild(foto);
      }
    });

    ligarCarrossel(track);
  }

  function ligarCarrossel(track) {
    var prev = $("#espaco-prev"), next = $("#espaco-next");
    var reduz = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function passoLargura() {
      var primeiro = track.querySelector(".carrossel__slide");
      var base = primeiro ? primeiro.getBoundingClientRect().width : track.clientWidth * 0.8;
      return Math.max(base + 16, track.clientWidth * 0.6);
    }
    function rolar(dir) {
      track.scrollBy({ left: dir * passoLargura(), behavior: reduz ? "auto" : "smooth" });
    }
    if (prev) prev.addEventListener("click", function () { rolar(-1); });
    if (next) next.addEventListener("click", function () { rolar(1); });

    // estado das setas (desabilita no início/fim)
    function atualizarSetas() {
      var max = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max;
    }
    track.addEventListener("scroll", atualizarSetas, { passive: true });
    window.addEventListener("resize", atualizarSetas);
    window.addEventListener("load", atualizarSetas);
    atualizarSetas();
    // o tamanho do trilho muda conforme as imagens/vídeos carregam: recalcula
    track.querySelectorAll("img").forEach(function (img) {
      if (img.complete) return;
      img.addEventListener("load", atualizarSetas, { once: true });
      img.addEventListener("error", atualizarSetas, { once: true });
    });
    var tentativas = 0;
    var iv = setInterval(function () { atualizarSetas(); if (++tentativas > 8) clearInterval(iv); }, 250);

    // teclado: setas ← → quando o carrossel está focado
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); rolar(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); rolar(-1); }
    });

    // arrastar com o mouse (no computador) — sem atrapalhar o clique das fotos
    var arrastando = false, partiuX = 0, partiuScroll = 0, moveu = 0;
    track.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "touch") return;       // toque já rola nativo
      arrastando = true; moveu = 0;
      partiuX = e.clientX; partiuScroll = track.scrollLeft;
      track.classList.add("carrossel__track--arrastando");
    });
    window.addEventListener("pointermove", function (e) {
      if (!arrastando) return;
      var d = e.clientX - partiuX; moveu = Math.max(moveu, Math.abs(d));
      track.scrollLeft = partiuScroll - d;
    });
    window.addEventListener("pointerup", function () {
      if (!arrastando) return;
      arrastando = false;
      track.classList.remove("carrossel__track--arrastando");
    });
    // se houve arrasto de verdade, cancela o clique seguinte (não abre o lightbox)
    track.addEventListener("click", function (e) {
      if (moveu > 8) { e.preventDefault(); e.stopPropagation(); moveu = 0; }
    }, true);
  }

  /* Depoimentos com abas (alunos / noivos / clientes) */
  function montarDepoimentos(grupos) {
    var abas = $("#dep-abas"), grid = $("#dep-grid");
    if (!abas || !grid || !grupos) return;

    function render(grupo) {
      grid.innerHTML = "";
      (grupo.itens || []).forEach(function (d, i) {
        var card = criar("figure", "depoimento reveal");
        card.style.transitionDelay = Math.min(i, 4) * 70 + "ms";
        var p = criar("p"); p.textContent = d.texto;
        var c = criar("cite"); c.textContent = d.autor;
        card.append(p, c); grid.appendChild(card);
      });
      observarReveal(grid);
    }

    grupos.forEach(function (g, i) {
      var btn = criar("button", "filtro" + (i === 0 ? " ativo" : ""));
      btn.type = "button"; btn.textContent = g.nome; btn.setAttribute("role", "tab");
      btn.addEventListener("click", function () {
        abas.querySelectorAll(".filtro").forEach(function (b) { b.classList.remove("ativo"); });
        btn.classList.add("ativo"); render(g);
      });
      abas.appendChild(btn);
    });
    /* Com um único grupo, as abas não fazem sentido — escondemos. */
    if (grupos.length <= 1) abas.style.display = "none";
    render(grupos[0]);
  }

  /* FAQ em acordeão */
  function montarFaq(itens) {
    var lista = $("#faq-lista");
    if (!lista || !itens) return;
    itens.forEach(function (item, i) {
      var wrap = criar("div", "faq__item");
      var btn = criar("button", "faq__pergunta");
      btn.type = "button"; btn.setAttribute("aria-expanded", "false");
      var span = criar("span"); span.textContent = item.pergunta;
      var sinal = criar("span", "faq__sinal"); sinal.setAttribute("aria-hidden", "true");
      btn.append(span, sinal);
      var resp = criar("div", "faq__resposta");
      var p = criar("p"); p.textContent = item.resposta; resp.appendChild(p);
      btn.addEventListener("click", function () {
        var aberto = wrap.classList.toggle("aberto");
        btn.setAttribute("aria-expanded", aberto ? "true" : "false");
        resp.style.maxHeight = aberto ? resp.scrollHeight + "px" : "0";
      });
      wrap.append(btn, resp); lista.appendChild(wrap);
    });
  }

  /* Canais de contato */
  function montarCanais() {
    var box = $("#contato-canais");
    if (!box || !C.contato) return;
    var canais = [
      { ico: "whatsapp", titulo: "WhatsApp", sub: "Resposta rápida", href: linkWhats(), externo: true },
      { ico: "instagram", titulo: "Instagram", sub: C.contato.instagramArroba || "@celine.pinturas", href: C.contato.instagram, externo: true }
    ];
    if (C.contato.linktree) canais.push({ ico: "link", titulo: "Todos os links", sub: "linktr.ee", href: C.contato.linktree, externo: true });
    canais.forEach(function (c) {
      var a = criar("a", "canal");
      a.href = c.href; if (c.externo) { a.target = "_blank"; a.rel = "noopener"; }
      var ic = criar("span", "canal__ico"); ic.innerHTML = ICONES[c.ico] || "";
      var tx = criar("span", "canal__txt"); tx.innerHTML = "<b>" + c.titulo + "</b><span>" + c.sub + "</span>";
      a.append(ic, tx); box.appendChild(a);
    });
  }

  function montarRedesRodape() {
    var box = $("#rodape-redes");
    if (!box || !C.contato) return;
    var redes = [
      { ico: "instagram", txt: C.contato.instagramArroba || "@celine.pinturas", href: C.contato.instagram },
      { ico: "instagram", txt: "@celine.p.cerimonial", href: C.contato.instagramCerimonial },
      { ico: "whatsapp", txt: "WhatsApp", href: linkWhats() }
    ];
    redes.forEach(function (r) {
      if (!r.href) return;
      var a = criar("a"); a.href = r.href; a.target = "_blank"; a.rel = "noopener";
      var ic = criar("span", "ico"); ic.innerHTML = ICONES[r.ico];
      var s = criar("span"); s.textContent = r.txt;
      a.append(ic, s); box.appendChild(a);
    });
  }

  /* =========================================================================
     LIGHTBOX (visualização ampliada)
     ========================================================================= */
  var lb = { lista: [], idx: 0, ultimoFoco: null };

  function abrirLightboxDe(obraEl) {
    var galeria = obraEl.parentElement;
    var visiveis = Array.prototype.filter.call(galeria.querySelectorAll(".obra"), function (o) {
      return o.style.display !== "none";
    });
    lb.lista = visiveis.map(function (o) { var img = o.querySelector("img"); return { src: img.dataset.full || img.src, alt: img.alt }; });
    lb.idx = visiveis.indexOf(obraEl);
    lb.ultimoFoco = obraEl;
    mostrarLightbox();
  }

  function mostrarLightbox() {
    var caixa = $("#lightbox"), img = $("#lb-img"), leg = $("#lb-legenda");
    var atual = lb.lista[lb.idx]; if (!atual) return;
    img.src = atual.src; img.alt = atual.alt || ""; leg.textContent = atual.alt || "";
    img.onerror = function () { img.src = "assets/img/placeholder.svg"; };
    caixa.classList.add("aberto"); caixa.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#lb-fechar").focus();
    var unico = lb.lista.length <= 1;
    $("#lb-prev").style.display = unico ? "none" : "";
    $("#lb-next").style.display = unico ? "none" : "";
  }

  function fecharLightbox() {
    var caixa = $("#lightbox");
    caixa.classList.remove("aberto"); caixa.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lb.ultimoFoco) lb.ultimoFoco.focus();
  }
  function passo(d) { lb.idx = (lb.idx + d + lb.lista.length) % lb.lista.length; mostrarLightbox(); }

  function ligarLightbox() {
    var caixa = $("#lightbox");
    if (!caixa) return;
    $("#lb-fechar").addEventListener("click", fecharLightbox);
    $("#lb-prev").addEventListener("click", function () { passo(-1); });
    $("#lb-next").addEventListener("click", function () { passo(1); });
    caixa.addEventListener("click", function (e) { if (e.target === caixa) fecharLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!caixa.classList.contains("aberto")) return;
      if (e.key === "Escape") fecharLightbox();
      else if (e.key === "ArrowRight") passo(1);
      else if (e.key === "ArrowLeft") passo(-1);
    });
  }

  /* =========================================================================
     MENU MOBILE
     ========================================================================= */
  function ligarMenu() {
    var btn = $("#menu-toggle"), nav = $("#nav-principal");
    if (!btn || !nav) return;
    function fechar() { nav.classList.remove("aberto"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Abrir menu"); }
    btn.addEventListener("click", function () {
      var aberto = nav.classList.toggle("aberto");
      btn.setAttribute("aria-expanded", aberto ? "true" : "false");
      btn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", fechar); });
  }

  /* =========================================================================
     CABEÇALHO (sombra ao rolar) + LINK ATIVO
     ========================================================================= */
  function ligarCabecalho() {
    var header = $("#cabecalho");
    window.addEventListener("scroll", function () {
      if (header) header.classList.toggle("rolou", window.scrollY > 20);
    }, { passive: true });

    var secoes = document.querySelectorAll("main section[id]");
    var links = {};
    document.querySelectorAll(".nav__lista a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) {
          Object.values(links).forEach(function (l) { l.classList.remove("ativo"); });
          var l = links[en.target.id]; if (l) l.classList.add("ativo");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secoes.forEach(function (s) { obs.observe(s); });
  }

  /* =========================================================================
     ANIMAÇÃO DE ENTRADA (fade-up discreto)
     ========================================================================= */
  var revealObs = null;
  function observarReveal(ctx) {
    if (!("IntersectionObserver" in window)) {
      (ctx || document).querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visivel"); });
      return;
    }
    if (!revealObs) {
      revealObs = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("visivel"); revealObs.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    (ctx || document).querySelectorAll(".reveal:not(.visivel)").forEach(function (el) { revealObs.observe(el); });
  }

  /* =========================================================================
     FORMULÁRIO → abre o WhatsApp com a mensagem pronta
     ========================================================================= */
  function ligarFormulario() {
    var form = $("#form-contato");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = $("#f-nome").value.trim();
      var assunto = $("#f-assunto").value;
      var msg = $("#f-mensagem").value.trim();
      var erro = $("#form-erro");
      if (!nome || !msg) { erro.hidden = false; return; }
      erro.hidden = true;
      var texto = "Olá, Celine! Meu nome é " + nome + ". Tenho interesse em " + assunto + ". " + msg;
      window.open(linkWhats(texto), "_blank", "noopener");
    });
  }

  /* =========================================================================
     EFEITOS PREMIUM (parallax discreto no hero) — respeita prefers-reduced-motion
     ========================================================================= */
  function efeitosPremium() {
    var reduz = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduz) return;
    var media = document.querySelector(".hero__moldura");
    if (!media || !("requestAnimationFrame" in window)) return;
    var ticking = false;
    function aplicar() {
      var y = window.scrollY;
      if (y < 700) media.style.transform = "translate3d(0," + (y * 0.06) + "px,0)";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(aplicar); ticking = true; }
    }, { passive: true });
  }

  /* =========================================================================
     INICIALIZAÇÃO
     ========================================================================= */
  function iniciar() {
    pintarIcones();
    montar();
    pintarIcones();          // reaplica ícones nos elementos criados dinamicamente
    ligarMenu();
    ligarCabecalho();
    ligarLightbox();
    ligarFormulario();
    observarReveal(document);
    efeitosPremium();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
