import { DocFlux } from '@harvest-profit/doc-flux';
/** @jsx DocFlux.createElement */

// This shows basically all the stuff you can do with this.
const Headings = () => (
  <div>
    <header row style={{ margin: [30, 20] }}>
      <div row>
        <div>
          <p><b>Entities:</b> Something</p>
          <p><b>Entities:</b> Something</p>
        </div>
        <h1 className="year" style={{ alignment: 'right', width: '*' }}>2018</h1>
      </div>
    </header>
    <h1 style={{ color: 'red' }}>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <raw data={
      { qr: 'https://google.com' }
    }
    />
    <a href="https://google.com">Google.com</a>
    <a href={2} internal><b>Page 2</b></a>
    <table>
      <thead>
        <th>Name</th>
        <th>Last</th>
        <th>Age</th>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>34</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>Doe</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>Doe</td>
          <td>33</td>
        </tr>
      </tbody>
    </table>
    <br />
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <div>
      <ol>
        <li>test</li>
        <li>test 2</li>
        <li>test 3</li>
      </ol>
    </div>
    <p>
      <b>Lorem</b> <em>ipsum dolor sit amet</em>, consectetur adipiscing elit. Phasellus hendrerit ornare quam, ac maximus mi facilisis porttitor. Integer vel nisi suscipit, pretium nulla ut, euismod leo. Etiam lobortis varius dictum. Curabitur ultricies, diam aliquet facilisis posuere, sapien odio efficitur mauris, id rhoncus risus erat lacinia odio. Phasellus accumsan sem non risus facilisis viverra. Aliquam iaculis fringilla metus at blandit. Cras bibendum nunc vitae pharetra eleifend.
    </p>
    <p>
Nam sit amet nibh semper, feugiat urna ut, pulvinar ante. Suspendisse potenti. Nunc posuere porta purus commodo finibus. Sed egestas et massa vitae imperdiet. Donec sed justo tristique diam dignissim aliquam. Proin est nulla, pretium quis malesuada sed, aliquam in ipsum. Ut maximus, est eget mollis venenatis, ligula dui mattis sapien, at scelerisque orci velit vitae erat. Nunc quis diam congue, ullamcorper nunc vitae, consectetur nulla. Vestibulum scelerisque luctus volutpat. Aliquam mattis elit quis diam aliquet dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin a tellus ex. Phasellus consequat fermentum lectus, eget ultricies ex varius non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
    <p>
Aliquam accumsan erat augue, nec porta est sollicitudin commodo. Nam efficitur justo nibh, ut gravida mauris fermentum ut. Fusce facilisis fermentum pharetra. Nam vitae libero ante. Donec gravida orci mi, cursus ultricies nulla mattis nec. Aliquam malesuada enim odio, in pulvinar nulla eleifend non. Sed eget leo sit amet dui lobortis elementum nec non lorem. Nunc vestibulum blandit felis sit amet faucibus. Nullam accumsan orci ac magna fermentum tincidunt. Phasellus lacus dolor, dignissim eget varius id, porta sit amet ante. Duis sodales dapibus nulla, quis dapibus dolor. Nulla facilisi.
    </p>
Sed aliquam, velit et placerat congue, risus mauris fermentum orci, ac blandit dolor purus sed erat. Praesent dapibus, eros sit amet imperdiet pulvinar, lorem risus sagittis magna, sit amet aliquet turpis augue ut nisi. Duis sed nibh a diam placerat posuere ac eu velit. Proin ut molestie dolor. Vivamus libero ante, aliquam vel nisi eu, molestie ullamcorper arcu. Morbi lorem velit, eleifend at pharetra a, laoreet a orci. Quisque vel rhoncus odio. Etiam tristique velit non tortor accumsan dapibus. Curabitur non velit nulla.
    <p>
Mauris mauris ante, suscipit vitae dignissim ut, placerat nec velit. Integer venenatis faucibus dolor, et dapibus ligula posuere consectetur. Aenean vehicula quam nibh, vitae interdum sem molestie id. Curabitur pulvinar arcu arcu, quis vulputate libero fringilla a. Nunc finibus viverra ex, ac bibendum dolor consequat id. Integer lectus risus, posuere vel augue sit amet, condimentum semper ante. Fusce et turpis turpis. Nullam ac leo non ipsum imperdiet aliquet at a nisl. Quisque ut odio scelerisque, mattis enim non, sagittis leo.
    </p>
    <h3 style={{ margin: [0, 10] }}>Multi Page Table with repeating headers</h3>
    <table style={{ layout: 'lightHorizontalLines' }}>
      <thead>
        <th style={{ bold: true }} colSpan={2}>Name</th>
        <th className="numberCol" style={{ bold: true }}>Age</th>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>Don</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>George</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>Don</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>George</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>Don</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
        <tr>
          <td>George</td>
          <td>Doe</td>
          <td className="numberCol">34</td>
        </tr>
      </tbody>
    </table>
    <footer style={{ margin: [30, 0] }}>
      <div row>
        <div style={{ width: '*' }}>
          <img
            style={{ width: 100 }}
            src="data:image/png;base64,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"
          />
        </div>
        <p style={{ width: '*', fontSize: 8, alignment: 'center' }}>Uses future prices from Jan 3rd</p>
        <p style={{ width: '*', alignment: 'right' }}>
          Sample Text #currentPage#
        </p>
      </div>
    </footer>
  </div>
);

export default Headings;
