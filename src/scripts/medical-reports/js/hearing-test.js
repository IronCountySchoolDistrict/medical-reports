import $ from 'jquery';
import _ from 'underscore';

export default function() {
  $(() => {
    fetch('/scripts/medical-reports/html/hearing-test-template.html', {
        credentials: 'same-origin'
      })
      .then(resp => resp.text())
      .then((hearingTestTemplate) => {
        const compiledTemplate = _.template(hearingTestTemplate);
        const renderedTemplate = compiledTemplate({
          studentdcid: psData.studentdcid
        });
        const select = $('td:contains("Alert Expires (date)")').parents('tr');
        select.after(renderedTemplate);
      });
  });
}
