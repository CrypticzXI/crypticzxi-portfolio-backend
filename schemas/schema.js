import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import home from "./home";
import portfolio from "./portfolio";
import account from "./account";
import user from "./user";
import fileupload from "./fileupload";
import imageupload from "./imageupload";
import header from "./header";
import headerDirectory from "./headerDirectory";
import aboutme from "./aboutme";
import software from "./software";
import richText from "./richText";
import resume from "./resume";
import links from "./links";
import blog from "./blog";
import portfolioRef from "./portfolioRef";
import links_page from "./links_page";
import tagsref from "./tagsref";
import tags from "./tags";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
		home, // add the document type to this array
    header,
    portfolio, // add the document type to this array
    account,
    user,
    fileupload,
    imageupload,
    headerDirectory,
    aboutme,
    software,
    richText,
    resume,
    links,
    blog,
    portfolioRef,
    links_page,
    tagsref,
    tags
  ]),
});