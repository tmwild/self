import Layout from '../components/Layout'
import SiteHead from '../components/SiteHead'

import reference from '../data/reference'


const Page = (props) => (
  <Layout currentPage="reference">
    <SiteHead />
    <div className="row">
        <div className="col-12 mt-4 mb-5">
            <h2>Reference</h2>

            <div className="accordion" id="chapters">

                {props.chapters.map((chapter, key) => (

                    <div className="card mt-2" key={chapter.id}>
                        <div className="card-header" id={`heading-${chapter.id}`}>
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={`#collapse-${chapter.id}`} aria-expanded="false" aria-controls={`collapse-${chapter.id}`}>
                                    {`${(key + 1)}: ${chapter.title}`}
                                </button>
                            </h5>
                        </div>

                        <div id={`collapse-${chapter.id}`} className="collapse" aria-labelledby={`heading-${chapter.id}`} data-parent="#chapters">
                            <div className="card-body" dangerouslySetInnerHTML={{__html: chapter.body}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>

  </Layout>
)

Page.getInitialProps = async function(context) {
    return {
        chapters: reference.data
    }
}

export default Page