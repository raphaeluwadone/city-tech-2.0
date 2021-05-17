
import Templates from './generics/Templates';
import { RenderRoutes, ROUTES } from './routes/routes'


function App() {
  return (
    <>
      <Templates>
        <RenderRoutes routes={ROUTES} />
      </Templates>
      
    </>
  );
}

export default App;
