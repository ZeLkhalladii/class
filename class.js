        class personne {
            constructor (nom, prenom, naissance, lieu, numéro, addresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.naissance = naissance;
        this.lieu = lieu;
        this.numéro  = numéro;
        this.addresse = addresse;
            }
        }
        function table() {

        let tab = new personne(document.getElementById('nom').value,
        document.getElementById('prenom').value,
        document.getElementById('naissance').value,
        document.getElementById('lieu').value,
        document.getElementById('numéro').value,
        document.getElementById('addresse').value);

        
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var text = document.createTextNode (tab.nom);
        td.appendChild (text);
        tr.appendChild (td);

        var td2 = document.createElement("td");
        var text2 = document.createTextNode (tab.prenom);
        td2.appendChild (text2);
        tr.appendChild (td2);

        var td3 = document.createElement("td");
        var text3 = document.createTextNode (tab.naissance);
        td3.appendChild(text3);
        tr.appendChild(td3);
        document.getElementById("affich").appendChild(tr);

        var td4 = document.createElement("td");
        var text4 = document.createTextNode (tab.lieu);
        td4.appendChild(text4);
        tr.appendChild (td4);
        document.getElementById("affich").appendChild(tr);

        var td5 = document.createElement("td");
        var text5 = document.createTextNode (tab.numéro);
        td5.appendChild(text5);
        tr.appendChild(td5);
        document.getElementById("affich").appendChild(tr);

        var td6 = document.createElement("td");
        var text6 = document.createTextNode(tab.addresse);
        td3.appendChild(text6);
        tr.appendChild(td6);
        document.getElementById("affich").appendChild(tr);
        }

