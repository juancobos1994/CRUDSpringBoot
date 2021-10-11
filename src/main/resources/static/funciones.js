function eliminar(id) {
	swal({
		title: "¿Estas seguro de eliminar?",
		text: "Presione OK para continuar",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
	.then((OK) => {
		if (OK) {
			$.ajax({
				url:"/eliminar/"+id,
				success: function(res) {
					console.log(res);
				}
			});
			swal("Persona Eliminada Correctamente", {
				icon: "success",
			}).then((ok)=>{
				if(ok){
					location.href="/listar";
				}
			});
		} else {
			swal("");
			}
	});
}