# Angular 11 - CK-Editor 4

## Build Custom CK-Editor

- Go to CK-Editor Builder site
- Upload [build-config.js](build-config.js)
- Verify Plugins
- Select Moono-Lisa Skin
- Select English and Arabic Language
- Select Source as Download Type
- Now download CK-Editor
- Update version and revision in [ckeditor.js](src/assets/ckeditor/ckeditor.js)

NOTE:
- In Optimized (Download Type) v4.17.2, ckeditor is not working. It gives an error when we load ckeditor in browser.
- In Optimized (Download Type) v4.19.0, placeholder select is not working. For fix, remove timestamp from `ckeditor.js`.

## Cleanup Custom Build

- Remove all samples files like sample, dev
- Remove `editor-delayed-creation` warning message from [editor.js](src/assets/ckeditor/core/editor.js)

## Angular Integration

`npm install ckeditor4-angular`

By default, it will automatically fetch the latest CKEditor 4` standard-all preset` via CDN.

- Reference : [CKEditor 4 Angular Integration](https://ckeditor.com/docs/ckeditor4/latest/guide/dev_angular.html#basic-usage)
- Example : [CKEditor 4 Angular Integration Example](https://ckeditor.com/docs/ckeditor4/latest/examples/angular.html#/)
- GitHub Repo : [ckeditor4-angular](https://github.com/ckeditor/ckeditor4-angular)

## Add External Plugin Using Angular Component

- Provide cdn url to `editorUrl` property
- Listen for `namespaceLoaded` emitter
- Register external plugin listener

```html
<ckeditor
  editorUrl='https://cdn.ckeditor.com/4.17.2/full-all/ckeditor.js'
  (namespaceLoaded)="onNamespaceLoaded($event)"
></ckeditor>
```

```js
declare let CKEDITOR: any;

public onNamespaceLoaded(event: CKEditor4.EventInfo) {
  // Add external like `placeholder` plugin which will be available for each
  CKEDITOR.plugins.addExternal('placeholder', 'http://localhost:4200/assets/ckeditor-standard/plugins/placeholder/plugin.js');
  CKEDITOR.plugins.addExternal('placeholder_select', 'http://localhost:4200/assets/ckeditor-standard/plugins/placeholder_select/plugin.js');
}
```

## References

- [CK-Editor Releases](https://github.com/ckeditor/ckeditor4-releases/blob/master/CHANGES.md)
- [CK-Editor CDN](https://cdn.ckeditor.com/)
- [CK-Editor Builder](https://ckeditor.com/cke4/builder)
- [CK-Editor Plugins](https://ckeditor.com/cke4/addons/plugins/all)
- [CK-Editor Plugins Documentation](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_plugins.html)

