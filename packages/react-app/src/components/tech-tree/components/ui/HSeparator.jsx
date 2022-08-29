import * as React from 'react';
function HSeparator({ display }) {
    return (<div style={{ height: '2px' }}>
      {display && <hr style={{ margin: 0 }} data-testid="h-separator"/>}
    </div>);
}
export default HSeparator;
//# sourceMappingURL=HSeparator.jsx.map