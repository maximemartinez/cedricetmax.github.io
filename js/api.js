/**
 * @author	Albin CAUDERLIER
 * @date	24/02/2017
 * 
 * Script jQuery appelant l'API de BlockCypher.com et affichant les donn�es.
 * 
 */

$(document).ready(function() {
	$.ajax({
		url : "http://bitcoin.mubiz.com/blockchaininfo",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append("data.blocks");
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
		}
	});
});