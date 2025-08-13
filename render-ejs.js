const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// List your pages and their data here
const pages = [
  { template: 'index.ejs', output: 'index.html', data: { title: 'Trang chủ' } },
  { template: 'privacy.ejs', output: 'privacy.html', data: { title: 'Chính sách bảo mật' } },
  { template: 'terms.ejs', output: 'terms.html', data: { title: 'Điều khoản' } },
  { template: 'projects.ejs', output: 'projects.html', data: { title: 'Projects' } },
  { template: 'resume.ejs', output: 'resume.html', data: { title: 'Resume' } },
  { template: 'contact.ejs', output: 'contact.html', data: { title: 'Contact' } },
];

const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');

pages.forEach(page => {
  const templatePath = path.join(viewsDir, page.template);
  ejs.renderFile(templatePath, page.data, { views: [viewsDir] }, (err, str) => {
    if (err) throw err;
    fs.writeFileSync(path.join(publicDir, page.output), str);
    console.log(`Rendered ${page.output}`);
  });
});