class MyComp extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const template = `
        <style>
           
        body{
            background-image: url(img/console.jpg);
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: 100%;
            
            
            }
            nav{
                background-color: black;
                border:10px dashed #e8d5b7; 
                margin-top:-10px;
                margin-left:-10px;
                margin-right:-8px;  
            }
            
            a{
                text-decoration: underline;
                font-family: Segoe UI black;
                color:rgb(255, 255, 255);
                font-size: 20px;
            }
            h1{
                font-family: 'segoe ui';
                font-size: 300%;
                 color:white;
            }
            
            h2{
                color:white;
            }
            h3{
                color:white;
            }
            
            
            
            p{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                text-align: justify;
                color:white;
            
            }
            section{
                border: 5px double blue;
                margin-left:250px;
                margin-right:250px;  
                margin-top: 150px;
            }
            footer{
                
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                border: 5px solid black;
                margin-left:250px;
                margin-right:250px;  
                color:white;
            }
            figcaption{
                color:white;
            }
            .disclaimer{
                display:none;
            }
            
            a:hover{
                background-color:blue;
                transition:1s;
            }
            a:focus{
                color:red;
               
            }
            

        </style>
     <slot>
     
     <nav>
 
     <table width="1200" cellpadding="9" align="center" cellspacing="20">
     <td> <a href="atividades.html">Index</a></td>
     <td><a href="curiosidades.html">Curiosidades</a></td>
     <td><a href="sobre.html">Projeto Angular</a></td>
     <td> <a href="git.html">GitHub</a></td>
     <td><a href="direito.html">Direitos de Imagem</a></td>
     <td><a href="css.html">Css</a></td>
     <td><a href="formul??rio.html">Formul??rio</a></td>
     <td> <a href="menuRes.html">Menu Responsivo</a></td>
   
   </table>
      
 </nav>


     </slot>
     `

        this.shadow.innerHTML = template

    }
}

customElements.define('menu-atividade', MyComp)