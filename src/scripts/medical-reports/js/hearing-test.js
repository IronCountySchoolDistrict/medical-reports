import $ from 'jquery';
import _ from 'underscore';
import template from '../html/hearing-test-template.html'

export default function() {
  $(() => {
    const compiledTemplate = _.template(template);
    const renderedTemplate = compiledTemplate({
      studentdcid: psData.studentdcid
    });
    const select = $('td:contains("Alert Expires (date)")').parents('tr');
    select.after(renderedTemplate);
  });
  
}
