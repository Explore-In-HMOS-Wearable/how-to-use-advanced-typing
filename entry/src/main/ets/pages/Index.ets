@Entry
@Component
struct Index {
  build() {
    Column({ space: 10 }) {
      Text('Advanced Typing').fontSize(20).fontWeight(FontWeight.Bold)
      Text('This project demonstrates advanced TypeScript techniques')
        .fontSize(14)
        .textAlign(TextAlign.Center)
      Text('Explore the types folder to see examples').fontSize(14)
    }
    .padding(20)
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
  }
}