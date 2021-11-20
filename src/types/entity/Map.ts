// export interface Ring {
//   localAuthorityId: string;
//   region: string | undefined;
//   localAuthorityName: string | undefined;
//   rawRank: number;
//   rank: number;
//   contour: number[][];
// }

export interface Polygon {
  rings: number[][][]
}

// export interface LocalAuthorityPolygon {
//   localAuthority: string;
//   rings: Ring[];
// }

// export interface MapLayer {
//   layerState?: boolean;
//   id: string;
//   name: string;
//   cartoSQLLayer: any;
//   layer_groups: {
//     id: string;
//     name: string;
//   }[];
// }

// export interface ToolTip {
//   id: string;
//   name: string;
//   column_name: string;
// }
