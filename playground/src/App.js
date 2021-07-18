import logo from './logo.svg';
import './App.css';
import { BackToTop } from './component-lib'

function App() {
  return (
    <div className="App">
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>scroll up</span>
      </BackToTop>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum tellus felis, vitae venenatis mauris luctus eu. Fusce ut egestas enim. Morbi tempor rhoncus tempus. Pellentesque vel tortor placerat, vulputate dolor in, euismod mi. Curabitur lacinia dignissim diam, non vulputate augue auctor vitae. Fusce elementum consectetur aliquam. Nullam vel diam vitae nisi placerat commodo. Sed congue tortor id sollicitudin molestie. Donec suscipit erat eu venenatis aliquam. Quisque id nulla eget ligula tempor hendrerit. Donec ultrices nisl ac tellus commodo molestie. Sed aliquet dolor ac sapien lacinia, eu elementum sapien condimentum.

Vivamus in dui eget libero commodo ullamcorper. Integer risus elit, lacinia in tortor ut, pharetra pellentesque ligula. Integer eros odio, malesuada sed turpis sit amet, ullamcorper viverra nibh. Nunc tempor enim erat, sit amet lobortis velit maximus at. Praesent a turpis augue. Donec posuere, risus in ultricies tincidunt, erat purus maximus dolor, accumsan posuere augue mi at sem. Nullam elementum risus quis ante porttitor sodales. Nam pharetra sed tortor a dapibus. Phasellus feugiat tristique tellus nec consectetur. Nullam tellus dolor, venenatis sed enim id, dapibus consectetur velit. Phasellus tincidunt ligula eu suscipit sollicitudin.

Integer sed libero vulputate, pellentesque mi et, consequat lectus. Pellentesque sit amet hendrerit eros. Nullam consectetur ex malesuada dolor pellentesque, id laoreet odio venenatis. Integer non malesuada ipsum. Donec ante eros, tristique et venenatis vitae, rutrum nec orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam et maximus enim. Aliquam tristique viverra elit, in malesuada augue faucibus vel. Nam sollicitudin scelerisque dapibus. Fusce nec faucibus nibh, quis cursus quam.

Pellentesque quis tellus faucibus, rhoncus massa eget, bibendum diam. Nulla egestas ultricies metus, eu vulputate diam auctor in. Fusce euismod nisl et auctor placerat. Ut dapibus pretium neque, nec tempus odio accumsan ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae turpis dui. Vivamus in mauris nec enim egestas facilisis et ac justo. Sed interdum, diam quis malesuada finibus, sapien massa rhoncus dolor, in vestibulum nisi nibh et justo. Aenean diam nulla, ornare in facilisis a, accumsan ac urna. Nunc nec porttitor metus. Sed libero mauris, facilisis sit amet mauris ut, bibendum dignissim diam. Etiam libero felis, semper vitae enim ut, semper maximus dolor. Suspendisse id sagittis purus. Donec vitae libero purus.

Nam at commodo augue. Nam scelerisque metus sit amet felis mattis blandit. Aenean elementum nec elit et venenatis. Nam semper ante arcu. Sed sed cursus elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac dolor justo. Aliquam tortor eros, iaculis at mollis nec, malesuada quis magna. Mauris dapibus sem sed tempor pretium. Phasellus mauris libero, sagittis et sapien nec, facilisis vehicula elit. Phasellus ac ultricies turpis, ut ullamcorper dolor. Quisque tristique turpis quam, ac semper lectus congue in. Ut et lacinia mauris. Integer eget nunc sapien. Sed tincidunt lacus magna, at efficitur leo varius et. In libero augue, egestas id nulla sit amet, auctor placerat risus.

Etiam hendrerit imperdiet commodo. Mauris sit amet molestie velit, nec convallis tellus. Nam faucibus mauris auctor, fermentum orci in, scelerisque lacus. Duis et lorem aliquam, tristique velit quis, euismod mauris. Integer venenatis dolor sapien, in imperdiet mi viverra id. Curabitur id turpis nisl. Suspendisse diam urna, condimentum id enim et, venenatis egestas quam.

Nulla at laoreet eros, a faucibus justo. Curabitur a nisi a magna facilisis fringilla. In consectetur commodo vehicula. Nullam sapien tortor, faucibus et tincidunt non, faucibus cursus dolor. Curabitur vitae neque fermentum, volutpat justo quis, interdum elit. Aenean vel mattis tortor. Donec vehicula commodo facilisis. Nullam dictum leo risus, vitae sodales sapien ornare ac. Donec enim elit, fermentum mollis ullamcorper non, laoreet sed ex. Quisque a tincidunt nunc, et varius sapien. Maecenas non tincidunt dolor. Curabitur luctus ligula nisi, a euismod nisl elementum a.

Nullam quis eros sed felis tempus egestas. Phasellus in pulvinar nulla, eu ultrices dui. Nunc bibendum velit sed tempus hendrerit. Phasellus consectetur nunc ut turpis sollicitudin, sit amet pretium ex congue. Nam congue augue in leo viverra scelerisque quis sit amet velit. Mauris ut quam faucibus, congue magna at, venenatis quam. Proin eget nibh neque. Nulla fermentum nisl ac facilisis aliquam. Nulla tincidunt ullamcorper orci pulvinar lacinia. Mauris tincidunt lorem id velit feugiat porta. Nam ut arcu lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Aenean pulvinar augue urna, id porta leo vehicula eget. Praesent quis quam non quam semper pellentesque. Maecenas facilisis nunc lectus. Sed sollicitudin efficitur leo ut elementum. Nam placerat neque eu luctus ornare. Donec a arcu vulputate, rutrum mi eu, lobortis nunc. Sed a magna mollis, euismod turpis vel, fringilla neque. Mauris nec fermentum erat. Phasellus gravida placerat ligula ac cursus.

Proin dapibus sed mauris a hendrerit. Etiam rutrum luctus ligula, sit amet pulvinar mi venenatis nec. Vivamus id hendrerit nunc. Aenean laoreet elit quis neque interdum dictum. Aenean sodales ex eu augue feugiat hendrerit. Nulla interdum id nunc a malesuada. Nunc erat mauris, imperdiet at risus eget, facilisis mollis neque. Nunc et molestie nibh.

Morbi placerat, eros in pharetra rhoncus, ipsum libero fermentum augue, eget euismod turpis sem et felis. Sed gravida congue lectus, non cursus magna varius at. Sed ut tortor a sem mollis egestas quis at elit. Donec rutrum, odio eget rhoncus lobortis, neque eros tristique sem, vel lacinia ante massa at felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae posuere neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur nulla augue, efficitur in erat ultricies, vehicula sagittis nisl. Pellentesque nec lacus id felis fermentum volutpat. Vestibulum ut eros nec velit euismod auctor. Ut lacinia blandit dui vel egestas. Etiam vitae pretium ante, non consequat dolor. Duis aliquam magna id felis pulvinar gravida. Morbi euismod interdum vulputate. Donec aliquet sagittis lectus aliquam commodo. Vestibulum scelerisque ex sed dolor pellentesque dictum.

Aliquam egestas ex nec eros scelerisque fermentum. Aenean fringilla auctor nisi, quis dapibus nunc sollicitudin id. Mauris maximus ipsum a consequat interdum. Quisque at justo consequat, posuere sapien eget, venenatis ex. Quisque in lobortis nunc. Phasellus egestas tortor leo, quis scelerisque lectus gravida ut. Nam suscipit, neque non sollicitudin lacinia, tellus metus ultrices erat, id ultrices nisl ante vel purus. Suspendisse velit lacus, cursus id odio quis, facilisis posuere odio.

Proin nec diam et mauris mattis sodales. Vivamus sapien nisi, condimentum at viverra sed, sollicitudin a erat. Aliquam efficitur dictum lacus, ut pulvinar mi aliquet vitae. Nullam rhoncus, nulla a volutpat iaculis, nisi augue pharetra libero, ac tempor enim nisl in quam. Vivamus gravida dictum lorem, id finibus nibh fermentum non. Suspendisse iaculis arcu et ante placerat, vel viverra urna facilisis. In tristique erat nec metus accumsan finibus. Ut porta bibendum urna at laoreet. Donec accumsan, erat sit amet condimentum hendrerit, odio felis porttitor ante, vel laoreet orci velit id erat. Donec malesuada quam viverra, luctus tortor quis, tempus enim. Quisque iaculis, lorem ut rutrum cursus, nulla augue tempus quam, non condimentum lorem arcu quis eros. Donec ut ipsum rutrum, interdum velit lacinia, sollicitudin nisi.

Nulla rutrum elit quis est tincidunt, vitae fringilla tortor finibus. Suspendisse sed aliquet elit, eget varius lorem. Vestibulum semper diam in nunc molestie faucibus. Nunc in mollis velit, sit amet fringilla orci. Vestibulum fringilla et orci sed maximus. Fusce feugiat ante nisl, et pellentesque diam vestibulum ac. Proin pretium venenatis augue ultricies convallis. Donec in venenatis dui. Phasellus feugiat imperdiet mauris nec accumsan. Nunc sit amet ipsum a nisl congue pellentesque.

Nulla pharetra, sapien vitae commodo elementum, enim diam egestas eros, a porttitor neque elit ac mauris. Ut eros nibh, tempus id consequat et, mattis sed sem. Nullam imperdiet, magna eu pretium suscipit, odio neque aliquam dolor, convallis sollicitudin nibh sem vel neque. Etiam efficitur elementum egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce placerat lectus quis ex hendrerit, nec vehicula ex lobortis. Quisque felis elit, varius eu felis eget, euismod scelerisque purus. Nullam sodales nibh a libero posuere imperdiet. Phasellus suscipit vitae lorem sit amet auctor. Etiam efficitur tortor at eros rhoncus, non mollis ligula imperdiet. Suspendisse ut vestibulum ante, ac placerat metus.

Fusce condimentum id diam eget tristique. Maecenas eleifend velit nulla, at egestas elit consequat ut. Nulla varius felis urna, rhoncus pretium enim semper vel. Aenean ac sem auctor, faucibus velit a, auctor arcu. Fusce et dignissim metus, ac egestas turpis. Nunc sagittis eget risus id imperdiet. Aliquam sed imperdiet purus, vitae pretium diam.

Phasellus vel luctus metus, a venenatis ipsum. Nam sed posuere ligula. Maecenas efficitur efficitur erat eget lobortis. Morbi elementum, nibh eu auctor elementum, ex risus fermentum diam, sit amet imperdiet orci felis vestibulum purus. Etiam consectetur varius eros, nec mollis sem consequat a. Curabitur interdum, risus a venenatis suscipit, augue lacus sagittis ipsum, non dapibus magna elit at urna. Fusce rhoncus consequat dolor posuere posuere. Praesent pretium sapien malesuada enim vehicula viverra. Etiam venenatis, mauris eu maximus varius, enim dui hendrerit risus, a commodo nisi nunc vitae turpis. Nam tempus mi eu purus mattis ultrices. Donec ante massa, tincidunt quis facilisis quis, imperdiet sit amet lorem. Fusce blandit erat quis odio porttitor accumsan. Nam eu massa id nisl tempor rutrum. Fusce dapibus ut est eget feugiat. Vestibulum non mauris magna.

Ut maximus augue id arcu lacinia, vel eleifend nunc scelerisque. In tempor arcu at bibendum pulvinar. Nullam convallis, arcu ac lacinia posuere, lorem felis volutpat dolor, at finibus diam velit quis lectus. Duis dictum, arcu a aliquam ultrices, nulla turpis molestie odio, eget lobortis odio elit in leo. Maecenas ante erat, gravida at laoreet sed, aliquam sit amet augue. Aliquam erat volutpat. Quisque ac mauris tincidunt, maximus metus vel, pretium elit. Aenean sit amet purus posuere, lacinia lacus a, tincidunt elit. Nullam tristique in metus sed cursus. Donec vulputate placerat vulputate. Sed pharetra vestibulum accumsan.

Quisque dictum interdum lectus, vitae tempus ante facilisis a. Suspendisse porta blandit mauris a gravida. Suspendisse luctus blandit enim quis hendrerit. Praesent leo massa, fringilla ornare urna vitae, feugiat porta arcu. In sed enim sit amet tellus tempor pellentesque in id leo. Proin tristique egestas mi non condimentum. Cras tellus lectus, ultricies nec tortor in, vulputate tincidunt justo. Proin placerat ut diam eu placerat. Cras dignissim pulvinar libero, a varius leo fermentum quis. Sed venenatis aliquam suscipit. Pellentesque aliquam interdum nunc interdum consectetur. In porttitor neque at lacus tempor, sit amet sodales sapien accumsan. Aliquam vel magna maximus, maximus risus bibendum, lobortis ipsum. Integer mattis mi sed elit hendrerit rutrum.

Phasellus tincidunt ultricies dignissim. Nulla porta dui tellus, nec pretium magna molestie sit amet. Nulla facilisi. Integer magna augue, bibendum non varius consequat, volutpat ac sem. Nulla facilisi. Nunc et feugiat felis. Morbi hendrerit pretium accumsan.
      </p>
    </div>
  );
}

export default App;
