(()=>{const C=window.CONFIG||{},$=s=>document.querySelector(s);
const mb=$("#mb"),nav=$("#nav");if(mb)mb.onclick=()=>mb.setAttribute("aria-expanded",nav.classList.toggle("open"));
const ig=$("#ig");if(ig){if(C.instagram){ig.href=C.instagram;ig.rel="noopener"}else ig.hidden=true}
document.querySelectorAll(".ig-slot").forEach(e=>{e.innerHTML=C.instagram?`<a href="${C.instagram}" rel="noopener">Instagram da OUTRO</a>`:'<span class="tag">Instagram ainda não configurado.</span>'});
const em=$("#email-slot");if(em)em.innerHTML=C.email?`<a href="mailto:${C.email}">${C.email}</a>`:'<span class="tag">E-mail de contato ainda não configurado.</span>';
const f=$("#cad");if(!f)return;
f.addEventListener("submit",async e=>{e.preventDefault();const m=$("#m1"),v=$("#em").value.trim();m.className="msg";
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){m.className="msg err";m.textContent="Digite um e-mail válido, como nome@exemplo.com.";$("#em").focus();return}
if(!$("#ck").checked){m.className="msg err";m.textContent="Marque a caixa para autorizar o envio de e-mails.";return}
if(C.cadastroEndpoint){m.textContent="Enviando…";try{const r=await fetch(C.cadastroEndpoint,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify({email:v,consentimento:"sim"})});if(!r.ok)throw 0;m.className="msg ok";m.textContent="Cadastro feito. Você será avisado no lançamento.";f.reset()}catch{m.className="msg err";m.textContent="Não foi possível enviar. Verifique a conexão e tente de novo."}return}
if(C.email){m.className="msg ok";m.textContent="Abrimos seu app de e-mail. Envie a mensagem para concluir.";location.href=`mailto:${C.email}?subject=${encodeURIComponent("Quero ser avisado do lançamento da OUTRO")}&body=${encodeURIComponent("Autorizo receber e-mails da OUTRO sobre o lançamento. Meu e-mail: "+v)}`;return}
m.className="msg err";m.textContent="O cadastro ainda não está ativo. Nada foi salvo."})})();
