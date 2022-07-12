class MyComp extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const template = `
        <style>
           
        html {
            scroll-behavior: smooth;
        }
        
        a {
            text-decoration: none;
        }
        body {
            margin: 0;
        }
        ul {
            list-style: none;
            padding: 0;
            overflow: hidden;
            transition: all .5s;
        }
        nav {
            background-color:rgb(0, 230, 110);
            padding: 0 20px;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            width: 100%;
            top: 0;
        }
        p {
            color: #FFF;
        }
        nav,
        ul {
            display: flex;
            flex-direction: row;
            padding-right:40px;
        }
        li {
            padding: 0 20px;
        }
        
        button {
            background-color: transparent;
            border: none;
            color: #FFF;
            font-size: 36px;
            position: absolute;
            right: 10px;
            top: 10px;
            display: none;
        }
        a:hover,button:hover {
            cursor: pointer;
            opacity: 0.8;
            background-color: rgba(255, 255, 255, 0.2);
        }
        .content {
            background-color: #606060;
            width: 100%;
            height: 100vh;
        }
        @media (max-width: 700px) {
            nav,
            ul {
                flex-direction: column;
            }
            ul {
                text-align: center;
                margin: 0;
                height: 0;
            }
            nav {
                padding: 0;
                align-items: flex-start;
            }
            button {
                display: flex;
            }
            li,
            ul {
                width: 100%;
            }
            ul.responsivo {
                height: 260px;
            }
            #logo{
                cursor: pointer;
            }
           
            
        }

        </style>
     <slot>
     <nav>
     <div class="logo">
         <a href="#"> <img src="atividade/img/logo.gif" width="90px" /></a>
     </div>
     <button onclick="abrirMenu()">&#9776;</button>
     <ul id="botoesMenu">
         <a href="atividade/atividades.html">
             <li>
                 <p>Atividades</p>
             </li>
             <a href="quiz.html">
                 <li>
                     <p>Quiz</p>
                 </li>
                 <a href="#">
                     <li>
                         <p>Curiosidades</p>
                     </li>
                     <a href="#">
                         <li>
                             <p>Conspirações</p>
                         </li>
        
                             <a href="#">
                                 <li>
                                     <p>Documentários</p>
                                 </li>    

 </nav>

                        



        </slot>
        `

        this.shadow.innerHTML = template

    }
}

customElements.define('meu-menu', MyComp)