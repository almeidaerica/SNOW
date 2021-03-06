/* Email Script criado para notificar quando uma task sla alcançar 70% em seu "Business elapsed percentage".
*/


(function runMailScript( /* GlideRecord */ current, /* TemplatePrinter */ template,
    /* Optional EmailOutbound */
    email, /* Optional GlideRecord */ email_action,
    /* Optional GlideRecord */
    event) {

    // Add your code here
    var instance = gs.getProperty('glide.servlet.uri');
    var link_request = instance;


    var gr = new GlideRecord("task_sla"); //task_sla
    gr.addQuery("sys_id", current.sys_id);
    gr.query();

    while (gr.next()) {

        if (gr.task.sys_class_name == "incident") {

            link_request += 'incident.do?sys_id=';

        } else if (gr.task.sys_class_name == "problem") {

            link_request += 'problem.do?sys_id=';

        }
        template.print('The SLA has been reached in 70%' + '<a href=' + link_request + gr.task.sys_id + '> <button>' + gr.task.number + '</button></a><br/>This SLA is a: ' + gr.sla.getDisplayValue() + '<br/>Assigned To: ' + gr.task.assigned_to.getDisplayValue());
    }

})(current, template, email, email_action, event);
