$('#SkypeButton_Chat_kubica1988_paraElement').addClass('btn btn-default btn-lg');
$('#SkypeButton_Chat_kubica1988_paraElement').children().children().removeAttr( 'style' );
$('#SkypeButton_Chat_kubica1988_paraElement').find('a img').remove();
$("<i class='fa fa-skype fa-fw'></i>").appendTo('#SkypeButton_Chat_kubica1988_paraElement a');
$("<span class='network-name'>skype</span>").appendTo('#SkypeButton_Chat_kubica1988_paraElement a');
