async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line)
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`),
    repeat = 1000,
    speed = 400
	
    let line = 0

	if(!textarea) throw new Error("Tienes que abrir una conversacion")
	
	for(line = 0; line < repeat; line++){
		console.log(lines) 
	
		textarea.focus();
		document.execCommand('insertText', false, lines + line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		

        await new Promise(resolve => setTimeout(resolve, speed));
	}
	
	return line
}

enviarScript(`
Aqui chingando un rato la madre n°
`).then(e => console.log(`Código finalizado, ${e} mensajes que pediste`)).catch(console.error)