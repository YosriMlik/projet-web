/* Fonction pour envoyer le contenu saisit par email */
function send(){
    var content = document.getElementById("content");
    var mail = document.getElementById("sendButton");
    if(content.value != ""){
        mail.href = "mailto:ymlik24@gmail.com?body="+content.value+"&subject=Salut%20Mr.%20Yosri,%20j'ai%20quelque%20chose%20à%20te%20dire";
    } else{
        mail.href = "contact.html";
        mail.setAttribute("target", "_self");
        alert("Écrire quelque chose !");
    }
};

/* Fonction pour vérifier les réponses des quiz */
function check(){
    let score = 0;
    
    let Q1A1 = document.getElementById("Q1A1");
    let Q1A2 = document.getElementById("Q1A2");
    let Q1A3 = document.getElementById("Q1A3");

    let Q2A1 = document.getElementById("Q2A1");
    let Q2A2 = document.getElementById("Q2A2");
    let Q2A3 = document.getElementById("Q2A3");

    let Q3A1 = document.getElementById("Q3A1");
    let Q3A2 = document.getElementById("Q3A2");
    let Q3A3 = document.getElementById("Q3A3");

    let Q4A1 = document.getElementById("Q4A1");
    let Q4A2 = document.getElementById("Q4A2");
    let Q4A3 = document.getElementById("Q4A3");

    let Q5A1 = document.getElementById("Q5A1");
    let Q5A2 = document.getElementById("Q5A2");
    let Q5A3 = document.getElementById("Q5A3");
    
    if( (Q1A1.checked != true && Q1A2.checked != true && Q1A3.checked != true) || (Q2A1.checked != true && Q2A2.checked != true && Q2A3.checked != true) || (Q3A1.checked != true && Q3A2.checked != true && Q3A3.checked != true) || (Q4A1.checked != true && Q4A2.checked != true && Q4A3.checked != true) || (Q5A1.checked != true && Q5A2.checked != true && Q5A3.checked != true) ){
        alert("Veuiller répondre à tous les questions");
    } else{
        document.getElementById("q1_a1").style.color = 'red';
        document.getElementById("q1_a2").style.color = 'red';
        document.getElementById("q1_a3").style.color = 'green';
        if(Q1A3.checked == true){
            score = score+1;
        }

        document.getElementById("q2_a1").style.color = 'green';
        document.getElementById("q2_a2").style.color = 'red';
        document.getElementById("q2_a3").style.color = 'red';
        if(Q2A1.checked == true){
            score = score+1;
        }

        document.getElementById("q3_a1").style.color = 'green';
        document.getElementById("q3_a2").style.color = 'red';
        document.getElementById("q3_a3").style.color = 'red';
        if(Q3A1.checked == true){
            score = score+1;
        }

        document.getElementById("q4_a1").style.color = 'red';
        document.getElementById("q4_a2").style.color = 'green';
        document.getElementById("q4_a3").style.color = 'red';
        if(Q4A2.checked == true){
            score = score+1;
        }

        document.getElementById("q5_a1").style.color = 'green';
        document.getElementById("q5_a2").style.color = 'red';
        document.getElementById("q5_a3").style.color = 'red';
        if(Q5A1.checked == true){
            score = score+1;
        }
        alert("Votre score est : "+score+"/5");
    };
};
