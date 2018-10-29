Component({
  mixins: [],
  data: {
    // 是否显示关闭按钮
    close: false
  },
  props: {

  },
  didMount() {
    const props = this.props
    // console.log('props', props)
    this.setData({ close: props.close })

  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 关闭前的回调
    onDialogClose () {
      this.setData({ show: false })
      let onDialogClose = this.props.onDialogClose
      if (onDialogClose) onDialogClose()
    }
  },
});
