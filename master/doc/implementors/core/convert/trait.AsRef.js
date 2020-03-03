(function() {var implementors = {};
implementors["pyo3"] = [{"text":"impl&lt;'p, T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;U&gt; for <a class=\"struct\" href=\"pyo3/pycell/struct.PyRef.html\" title=\"struct pyo3::pycell::PyRef\">PyRef</a>&lt;'p, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pyo3/pyclass/trait.PyClass.html\" title=\"trait pyo3::pyclass::PyClass\">PyClass</a> + <a class=\"trait\" href=\"pyo3/type_object/trait.PyTypeInfo.html\" title=\"trait pyo3::type_object::PyTypeInfo\">PyTypeInfo</a>&lt;BaseType = U, BaseLayout = PyCellInner&lt;U&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"pyo3/pyclass/trait.PyClass.html\" title=\"trait pyo3::pyclass::PyClass\">PyClass</a>,&nbsp;</span>","synthetic":false,"types":["pyo3::pycell::PyRef"]},{"text":"impl&lt;'p, T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;U&gt; for <a class=\"struct\" href=\"pyo3/pycell/struct.PyRefMut.html\" title=\"struct pyo3::pycell::PyRefMut\">PyRefMut</a>&lt;'p, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pyo3/pyclass/trait.PyClass.html\" title=\"trait pyo3::pyclass::PyClass\">PyClass</a> + <a class=\"trait\" href=\"pyo3/type_object/trait.PyTypeInfo.html\" title=\"trait pyo3::type_object::PyTypeInfo\">PyTypeInfo</a>&lt;BaseType = U, BaseLayout = PyCellInner&lt;U&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"pyo3/pyclass/trait.PyClass.html\" title=\"trait pyo3::pyclass::PyClass\">PyClass</a>,&nbsp;</span>","synthetic":false,"types":["pyo3::pycell::PyRefMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>","synthetic":false,"types":["pyo3::types::any::PyAny"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyBool.html\" title=\"struct pyo3::types::PyBool\">PyBool</a>","synthetic":false,"types":["pyo3::types::boolobject::PyBool"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyByteArray.html\" title=\"struct pyo3::types::PyByteArray\">PyByteArray</a>","synthetic":false,"types":["pyo3::types::bytearray::PyByteArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyBytes.html\" title=\"struct pyo3::types::PyBytes\">PyBytes</a>","synthetic":false,"types":["pyo3::types::bytes::PyBytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyComplex.html\" title=\"struct pyo3::types::PyComplex\">PyComplex</a>","synthetic":false,"types":["pyo3::types::complex::PyComplex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyDate.html\" title=\"struct pyo3::types::PyDate\">PyDate</a>","synthetic":false,"types":["pyo3::types::datetime::PyDate"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyDateTime.html\" title=\"struct pyo3::types::PyDateTime\">PyDateTime</a>","synthetic":false,"types":["pyo3::types::datetime::PyDateTime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyTime.html\" title=\"struct pyo3::types::PyTime\">PyTime</a>","synthetic":false,"types":["pyo3::types::datetime::PyTime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyTzInfo.html\" title=\"struct pyo3::types::PyTzInfo\">PyTzInfo</a>","synthetic":false,"types":["pyo3::types::datetime::PyTzInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyDelta.html\" title=\"struct pyo3::types::PyDelta\">PyDelta</a>","synthetic":false,"types":["pyo3::types::datetime::PyDelta"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyDict.html\" title=\"struct pyo3::types::PyDict\">PyDict</a>","synthetic":false,"types":["pyo3::types::dict::PyDict"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyFloat.html\" title=\"struct pyo3::types::PyFloat\">PyFloat</a>","synthetic":false,"types":["pyo3::types::floatob::PyFloat"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyList.html\" title=\"struct pyo3::types::PyList\">PyList</a>","synthetic":false,"types":["pyo3::types::list::PyList"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/prelude/struct.PyModule.html\" title=\"struct pyo3::prelude::PyModule\">PyModule</a>","synthetic":false,"types":["pyo3::types::module::PyModule"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyLong.html\" title=\"struct pyo3::types::PyLong\">PyLong</a>","synthetic":false,"types":["pyo3::types::num::PyLong"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PySequence.html\" title=\"struct pyo3::types::PySequence\">PySequence</a>","synthetic":false,"types":["pyo3::types::sequence::PySequence"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PySet.html\" title=\"struct pyo3::types::PySet\">PySet</a>","synthetic":false,"types":["pyo3::types::set::PySet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyFrozenSet.html\" title=\"struct pyo3::types::PyFrozenSet\">PyFrozenSet</a>","synthetic":false,"types":["pyo3::types::set::PyFrozenSet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PySlice.html\" title=\"struct pyo3::types::PySlice\">PySlice</a>","synthetic":false,"types":["pyo3::types::slice::PySlice"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyString.html\" title=\"struct pyo3::types::PyString\">PyString</a>","synthetic":false,"types":["pyo3::types::string::PyString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyTuple.html\" title=\"struct pyo3::types::PyTuple\">PyTuple</a>","synthetic":false,"types":["pyo3::types::tuple::PyTuple"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"pyo3/types/struct.PyAny.html\" title=\"struct pyo3::types::PyAny\">PyAny</a>&gt; for <a class=\"struct\" href=\"pyo3/types/struct.PyType.html\" title=\"struct pyo3::types::PyType\">PyType</a>","synthetic":false,"types":["pyo3::types::typeobject::PyType"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()