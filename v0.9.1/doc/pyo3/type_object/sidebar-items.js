initSidebarItems({"trait":[["PyBorrowFlagLayout","Marker type indicates that `Self` can be a base layout of `PyClass`."],["PyDowncastImpl","Reference abstraction for `PyClass` and `PyNativeType`. Used internaly."],["PyLayout","`T: PyLayout<U>` represents that `T` is a concrete representaion of `U` in Python heap. E.g., `PyCell` is a concrete representaion of all `pyclass`es, and `ffi::PyObject` is of `PyAny`."],["PySizedLayout","`T: PySizedLayout<U>` represents `T` is not a instance of `PyVarObject`. , in addition that `T` is a concrete representaion of `U`."],["PyTypeInfo","Python type information. All Python native types(e.g., `PyDict`) and `#[pyclass]` structs implement this trait."],["PyTypeObject","Python object types that have a corresponding type object."]]});