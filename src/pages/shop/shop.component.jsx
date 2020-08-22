import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        {this.state.collections.map((items) => <CollectionPreview key={items.id} title={items.title} id={items.id} items={items.items} />)}
      </div>
    );
  }
}
export default ShopPage;
