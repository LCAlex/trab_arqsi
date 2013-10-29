/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var xmlHttpObj;

function CreateXmlHttpRequestObject( )
{
    // detecÃ§Ã£o do browser simplificada
    // e sem tratamento de excepÃ§Ãµes
    xmlHttpObj = null;
    if (window.XMLHttpRequest) // IE 7 e Firefox
    {
        xmlHttpObj = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) // IE 5 e 6
    {
        xmlHttpObj = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttpObj;
}

function carregaCategorias()
{
    xmlHttpObj = CreateXmlHttpRequestObject();

    if (xmlHttpObj)
    {
        // DefiniÃ§Ã£o do URL para efectuar pedido HTTP - mÃ©todo GET
        xmlHttpObj.open("GET", "a.php", true);

        // Registo do EventHandler
        xmlHttpObj.onreadystatechange = adicionaCategorias;
        xmlHttpObj.send(null);
    }
}

function adicionaCategorias() {

    if (xmlHttpObj.readyState == 4 && xmlHttpObj.status == 200) // resposta do servidor completa
    {
        // propriedade responseXML que devolve a resposta do servidor
        var docxml = xmlHttpObj.responseXML;
        
        
        var categorias = docxml.getElementsByTagName("categoria");
        
        for(var a=0;a<categorias.length;a++){
            var categoria = categorias[a].firstChild.nodeValue;
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(categoria));
            document.getElementById("categorias").appendChild(option); 
        }
        
        
    }

}
